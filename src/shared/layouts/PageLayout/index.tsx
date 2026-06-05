import BreadcrumbsLine from "../../components/BreadcrumbsLine";
import type { BasePageLayoutType } from "../BasePageLayout";
import BasePageLayout from "../BasePageLayout";

type PageLayoutType = {
    name: string;
    href: string;
} & BasePageLayoutType;


const PageLayout = ({ children, name, href }: PageLayoutType) =>{
  return (
    <>
      <BasePageLayout>
        <BreadcrumbsLine name={name} href={href} />
        {children}
      </BasePageLayout>
    </>
  )
};


export default PageLayout;