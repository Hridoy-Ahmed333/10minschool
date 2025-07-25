interface Section {
  bg_color: string;
  description: string;
  name: string;
  order_idx: number;
  type: string;
  values: Array<{ [key: string]: unknown }>;
}

interface CtaText {
  name: string;
  value: string;
}

interface Meta {
  content: string;
  type: string;
  value: string;
}

interface Schema {
  meta_name: string;
  meta_value: string;
  type: string;
}

interface Seo {
  defaultMeta: Meta[];
  description: string;
  keywords: string[];
  schema: Schema[];
  title: string;
}

interface Medium {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

export interface Course {
  checklist: Checklist[];
  cta_text: CtaText;
  delivery_method: string;
  description: string;
  is_cohort_based_course: boolean;
  slug: string;
  id: number;
  modality: string;
  old_info: OldInfo;
  platform: string;
  secondary_cta_group: unknown[];
  title: string;
  media: Medium[];
  seo: Seo;
  sections: Section[];
  start_at: string;
  type: string;
}
