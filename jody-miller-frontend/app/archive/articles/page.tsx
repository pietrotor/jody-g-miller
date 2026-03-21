import { redirect } from "next/navigation";

export default function OldArticlesPage() {
  redirect("/writing-media/archive?type=article");
}
