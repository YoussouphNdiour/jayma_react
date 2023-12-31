import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import TypeWiseStore from "../../../src/components/Store/TypeWiseStore";
import MetaData from "../../meta-data";
import MainLayout from "../../../src/components/layout/MainLayout";
import {getServerSideProps} from "../../index";
import SEO from "../../../components/seo";

const Index = ({ configData , landingPageData }) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <CssBaseline />
      <SEO
        title={configData ? `Magasins Populaires` : "Loading..."}
        image={`${configData?.base_urls?.business_logo_url}/${configData?.fav_icon}`}
        businessName={configData?.business_name}
      />
      <MainLayout configData={configData} landingPageData={landingPageData}>
        <TypeWiseStore
          configData={configData}
          t={t}
          storeType="popular"
          title="Magasins Populaires"
        />
      </MainLayout>
    </>
  );
};

export default Index;
export {getServerSideProps}
