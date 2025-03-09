import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { UserProfile } from "@/components/auth/user-profile"

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <UserProfile />
    </DashboardLayout>
  )
}

