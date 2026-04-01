export type StatItem = {
  value: string;
  label: string;
};

export type OverviewMediaBadge = {
  value: string;
  label: string;
  position?: "top-right" | "bottom-left";
};

export type OverviewData = {
  category: string;
  status: string;
  subtitle: string;
  location: string;
  description: string;
  logoSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
  stats: StatItem[];
  highlights: string[];
  amenities: string[];
  mediaBadges?: OverviewMediaBadge[];
};

export type SpecItem = {
  title: string;
  content: string[];
};

export type GalleryImage = {
  src: string;
  alt?: string;
  caption?: string;
  type?: "image" | "video";
  poster?: string;
};

export type GalleryTab = {
  title: string;
  images: GalleryImage[];
  layout?: "carousel" | "grid";
  anchorId?: string;
};

export type AmenityCategory = {
  title: string;
  items: string[];
};

export type ConnectivityItem = {
  name: string;
  distance: string;
};

export type ConnectivityGroup = {
  title: string;
  items: ConnectivityItem[];
};

export type ProjectDetailsData = {
  amenities?: {
    title?: string;
    categories: AmenityCategory[];
    miscTitle?: string;
    miscItems: string[];
  };
  specifications: SpecItem[];
  galleryTabs: GalleryTab[];
  connectivity: {
    title?: string;
    groups: ConnectivityGroup[];
  };
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  hero: {
    type: string;
    src: string;
    heading: string;
    subheading?: string;
  };
  overview: OverviewData;
  details: ProjectDetailsData;
  cta?: ProjectCTAData;
  rera?: ProjectReraData;
};

export type ProjectCTAData = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type ProjectReraItem = {
  title: string;
  number: string;
  qrSrc: string;
};

export type ProjectReraData = {
  note?: string;
  websiteUrl?: string;
  items: ProjectReraItem[];
};
