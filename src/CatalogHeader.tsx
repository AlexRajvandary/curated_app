import {Breadcrumbs, BreadcrumbItem} from "@heroui/react";

export default function CatalogHeader() {
  return (
    <div className="mt-[40px] mb-[40px] ml-[156px]">
        <h1 className="text-3xl font-bold">
              Category name
        </h1>
         <Breadcrumbs className="mt-[20px] mb-[20px]" size="lg">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>
    </div>
  );
}
