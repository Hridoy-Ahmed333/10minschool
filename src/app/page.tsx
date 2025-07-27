import CoursePage from "@/components/CoursePage";

interface Props {
  searchParams: Promise<{ lang?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams; 
  const lang = params.lang || "en";

  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      next: {
        revalidate: 60,
      },
    }
  );

  const json = await res.json();
  const courseData = json.data;

  return <CoursePage initialData={courseData} />;
}
