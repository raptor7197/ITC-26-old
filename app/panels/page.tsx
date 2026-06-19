import PageHeader from "@/components/ui/PageHeader";

export default function Panels() {
  return (
    <main className="relative z-10 min-h-screen w-full max-w-none min-w-0 box-border pt-[120px] pb-24 font-poppins text-white">
      <PageHeader title="PANELS" />
      <div className="relative z-10 w-full max-w-[1100px] flex flex-col mx-auto gap-16 md:gap-24 px-[5%] md:px-8 mt-4">
        <p className="text-center text-xl text-gray-300">More details coming soon.</p>
      </div>
    </main>
  );
}
