import { redirect } from "next/navigation";

export default function OldPodcastsPage() {
  redirect("/writing-media/archive?type=podcast");
}
