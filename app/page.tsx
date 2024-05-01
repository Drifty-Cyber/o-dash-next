import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div>
        <PageTitle
          title="Welcome back, Mr Adeshina"
          classname="text-[16px] leading-[24px] font-bold text-[#667085]"
        />
        <PageTitle
          title="Pension Dashboard"
          classname="text-[30px] leading-[28px] font-bold tracking-wide text-[#101828]"
        />
      </div>
    </div>
  );
}
