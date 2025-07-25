import CoursePage from "@/components/CoursePage";

export const revalidate = 10; 

export default async function Home() {
   return (
    <>
      <CoursePage/>
    </>
  );
}
