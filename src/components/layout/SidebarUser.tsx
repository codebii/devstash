import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { mockUser } from "@/lib/mock-data";

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function SidebarUser() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        {mockUser.image && <AvatarImage src={mockUser.image} alt="" />}
        <AvatarFallback className="bg-linear-to-br from-blue-500 to-violet-500 font-semibold text-white">
          {getInitials(mockUser.name)}
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{mockUser.name}</p>
        <p className="truncate text-xs text-muted-foreground">{mockUser.email}</p>
      </div>
      <Badge variant="outline">{mockUser.isPro ? "Pro" : "Free"}</Badge>
    </div>
  );
}
