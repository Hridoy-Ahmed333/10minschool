import CoursePage from "@/components/CoursePage";

interface Props {
  searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const lang = params.lang || "en";

  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
    }
  );

  const json = await res.json();
  const seo = json?.data?.seo || {};

 
  const metaObj: Record<string, string | string[]> = {};
  (seo.defaultMeta || []).forEach(({ value, content }: { value: string; content: string }) => {
    if (metaObj[value]) {
      if (Array.isArray(metaObj[value])) {
        (metaObj[value] as string[]).push(content);
      } else {
        metaObj[value] = [metaObj[value] as string, content];
      }
    } else {
      metaObj[value] = content;
    }
  });


  const openGraphImages = metaObj["og:image"]
    ? Array.isArray(metaObj["og:image"])
      ? (metaObj["og:image"] as string[])
      : [metaObj["og:image"] as string]
    : [];





  return {
    title: seo.title || metaObj["og:title"] || "Default Title",
    description: seo.description || metaObj["og:description"] || "Default description",
    keywords: seo.keywords || [],
    openGraph: {
      title: metaObj["og:title"] || seo.title || "Default Title",
      description: metaObj["og:description"] || seo.description || "Default description",
      type: "website", 
      images: openGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title: metaObj["og:title"] || seo.title || "Default Title",
      description: metaObj["og:description"] || seo.description || "Default description",
      images: openGraphImages,
    },

  };
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
