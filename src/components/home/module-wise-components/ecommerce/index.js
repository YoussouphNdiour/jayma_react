import { Grid } from "@mui/material";
import React from "react";
import CustomContainer from "../../../container";
import pharmacyReviewedImage from "../../assets/grocery_reviewed_image.png";
import Banners from "../../banners";
import BestReviewedItems from "../../best-reviewed-items";
import FeaturedCategories from "../../featured-categories";
import PopularItemsNearby from "../../popular-items-nearby";
import RunningCampaigns from "../../running-campaigns";
import SpecialFoodOffers from "../../special-food-offers";
import Stores from "../../stores";
import FeaturedStores from "../pharmacy/featured-stores";
import CampaignBanners from "./CampaignBanners";
import FeaturedCategoriesWithFilter from "./FeaturedCategoriesWithFilter";
import NewArrivals from "./NewArrivals";

const Shop = (props) => {
  const { configData } = props;
  const menus = ["All", "Beauty", "Bread & Juice", "Drinks", "Milks"];

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sx={{ marginTop: { xs: "-10px", sm: "10px" } }}>
        <CustomContainer>
          <FeaturedCategories configData={configData} />
        </CustomContainer>
      </Grid>
      <Grid item xs={12}>
        <CustomContainer>
          <Banners />
        </CustomContainer>
      </Grid>
      {/* <Grid item xs={12}>
				{IsSmallScreen() ? (
					<VisitAgain configData={configData} />
				) : (
					<CustomContainer>
						<VisitAgain configData={configData} />
					</CustomContainer>
				)}
			</Grid> */}
      <Grid item xs={12}>
        <CustomContainer>
          <PopularItemsNearby
            title="Most Popular Products"
            subTitle="We provide best quality & valuable products around the world"
          />
        </CustomContainer>
      </Grid>
      <Grid item xs={12}>
        <CustomContainer>
          <CampaignBanners />
        </CustomContainer>
      </Grid>
      <Grid item xs={12}>
        <CustomContainer>
          <SpecialFoodOffers />
        </CustomContainer>
      </Grid>
      <Grid item xs={12}>
        <CustomContainer>
          <FeaturedStores title="Popular Store" configData={configData} />
        </CustomContainer>
      </Grid>{" "}
      <Grid item xs={12}>
        <CustomContainer>
          <BestReviewedItems
            menus={menus}
            title="Meilleurs articles évalués"
            leftImage={pharmacyReviewedImage}
          />
        </CustomContainer>
      </Grid>
      <Grid item xs={12}>
        <CustomContainer>
          <NewArrivals />
        </CustomContainer>
      </Grid>
      {/* <Grid item xs={12}>
				<CustomContainer>
					<DiscountedProductRedirectBanner />
				</CustomContainer>
			</Grid> */}
      <Grid item xs={12}>
        <CustomContainer>
          <RunningCampaigns />
        </CustomContainer>
      </Grid>
      {/*<Grid item xs={12}>*/}
      {/*  <CustomContainer>*/}
      {/*    <LoveItem />*/}
      {/*  </CustomContainer>*/}
      {/*</Grid>*/}
      <Grid item xs={12}>
        <CustomContainer>
          <FeaturedCategoriesWithFilter title="Featured Categories" />
        </CustomContainer>
      </Grid>
      {/* <Grid item xs={12}>
				<CustomContainer>
					<SinglePoster />
				</CustomContainer>
			</Grid> */}
      {/*<Grid item xs={12}>*/}
      {/*  <CustomContainer>*/}
      {/*    <NewArrivalStores />*/}
      {/*  </CustomContainer>*/}
      {/*</Grid>*/}
      {/*<Grid item xs={12}>*/}
      {/*    <CustomContainer>*/}
      {/*        <Banners />*/}
      {/*    </CustomContainer>*/}
      {/*</Grid>*/}
      {/*<Grid item xs={12}>*/}
      {/*    <CustomContainer>*/}
      {/*        <Coupons />*/}
      {/*    </CustomContainer>*/}
      {/*</Grid>*/}
      {/*<Grid item xs={12}>*/}
      {/*    <PromotionalBanner />*/}
      {/*</Grid>*/}
      <Grid item xs={12}>
        <CustomContainer>
          <Stores />
        </CustomContainer>
      </Grid>
    </Grid>
  );
};

Shop.propTypes = {};

export default Shop;
