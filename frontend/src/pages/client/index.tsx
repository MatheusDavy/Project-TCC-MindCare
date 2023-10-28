import { ReactNode } from "react";
import HeadMetaTags from "../../components/Next/HeadMetaTags/HeadMetaTags.view";
import ClientView from "../../views/Client/Client.view";
import LayoutClient from "../../layouts/LayoutClient/LayoutClient.view"

const ClientPage = () => {
    return (
      <>
        <HeadMetaTags
          canonical={`teste`}
          description={`Client`}
          metaImage={``}
          title={`Client`}
        />
        <ClientView />
      </>
    );
}

ClientPage.getLayout = (page: ReactNode) => <LayoutClient children={page} />

export default ClientPage;