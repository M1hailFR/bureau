interface IOptions {
  title: string;
  value: string;
}

export interface IBlockApartmentConfiguratorProps {
  title?: string;
  description?: string;
  link?: string;
  params?: {
    title: string;
    multiple?: boolean;
    options: IOptions[];
  }[];
}
