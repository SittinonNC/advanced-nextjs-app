import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl flex h-full flex-col px-4 pt-14">
        <div className="text-center mt-4">
          <p className="font-sarabun text-2xl">ติดต่อเรา</p>
          <p className="text-lg">ทดสอบการใช้ฟอนต์ sarabun</p>
        </div>
        <Separator className="mt-5" />
        <Button variant={"destructive"} className="mt-4" asChild>
          <Link href={"/"}>Go to Home page</Link>
        </Button>
      </div>
    </>
  );
}
