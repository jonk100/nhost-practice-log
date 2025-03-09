import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { SongsList } from "@/components/songs/songs-list"

export default function SongsPage() {
  return (
    <DashboardLayout>
      <SongsList />
    </DashboardLayout>
  )
}

