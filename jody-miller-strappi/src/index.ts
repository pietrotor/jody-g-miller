import type { Core } from "@strapi/strapi";

const PUBLIC_READ_CONTENT_TYPES = [
  "api::archive-item.archive-item",
  "api::category.category",
  "api::bio.bio",
  "api::the-details.the-details",
  "api::btg.btg",
  "api::speaking.speaking",
];

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await setPublicPermissions(strapi);
  },
};

async function setPublicPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi.db
    .query("plugin::users-permissions.role")
    .findOne({ where: { type: "public" } });

  if (!publicRole) {
    strapi.log.warn(
      "[bootstrap] Public role not found — skipping permission setup",
    );
    return;
  }

  const existingPermissions = await strapi.db
    .query("plugin::users-permissions.permission")
    .findMany({ where: { role: publicRole.id } });

  const existingActions = new Set(
    existingPermissions.map((p: { action: string }) => p.action),
  );

  for (const uid of PUBLIC_READ_CONTENT_TYPES) {
    const actions = ["find", "findOne"];

    for (const action of actions) {
      const actionKey = `${uid}.${action}`;

      if (!existingActions.has(actionKey)) {
        await strapi.db.query("plugin::users-permissions.permission").create({
          data: { action: actionKey, role: publicRole.id },
        });
        strapi.log.info(`[bootstrap] Public permission granted: ${actionKey}`);
      }
    }
  }
}
