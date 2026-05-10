import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="space-y-10 animate-fade-in pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <Skeleton className="h-10 w-[200px] rounded-lg" />
          <Skeleton className="h-4 w-[300px] rounded-lg" />
        </div>
        <Skeleton className="h-11 w-[140px] rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass p-6 border-white/5 rounded-2xl space-y-4">
            <div className="flex justify-between">
              <Skeleton className="size-10 rounded-xl" />
              <Skeleton className="h-4 w-12" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass border-white/5 p-8 lg:col-span-2 rounded-[2rem] space-y-8">
          <div className="flex justify-between">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-[300px] w-full rounded-2xl" />
        </div>

        <div className="glass border-white/5 p-8 rounded-[2rem] space-y-8">
          <Skeleton className="h-6 w-40" />
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="size-2 rounded-full mt-1.5" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
