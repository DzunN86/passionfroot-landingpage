export type CustomerType = {
  name: string;
  avatar: string;
  about: string;
};

export type CreatorGalleryType = {
  id: string;
  title: string;
  customers: CustomerType[];
  theme: {
    gradientStart: string;
    gradientEnd: string;
    primary: string;
    secondary: string;
  };
};

export type BlogType = {
  title: string;
  description: string;
  image: string;
  readTime: string;
};

export type NavMenuItemType = {
  name: string;
  url: string;
  icon: string;
  description?: string;
};

export type NavSubMenuType = {
  section?: string | undefined;
  links: NavMenuItemType[];
}

export type NavMenuType = {
  label: string;
  image?: string | undefined;
  subMenu: NavSubMenuType[];
}
