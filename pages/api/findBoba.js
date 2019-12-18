const yelp = require("yelp-fusion");
const dotenv = require("dotenv");

dotenv.config({});
const client = yelp.client(process.env.API_KEY);

async function findBoba(req, res){
    try {
        const result = await client.search({
            term: "boba",
            longitude: req.query.longitude,
            latitude: req.query.latitude,
            open: true
        });

        var boba_shop =
            result.jsonBody.businesses[
                Math.floor(Math.random() * result.jsonBody.businesses.length)
                ];

        const boba_shop_details = await client.business(boba_shop.id);
        const shop_img = boba_shop_details.jsonBody.image_url;

        var boba_shop_data = {
            name: boba_shop.name,
            rating: boba_shop.rating,
            price: boba_shop.price, // given in meters
            distance: (boba_shop.distance * 0.000621371).toFixed(2),
            address: boba_shop.location.address1,
            phone: boba_shop.display_phone,
            picture: shop_img,
            yelp: boba_shop.url
        };

        res.status(200).json({ boba_shop_data });
    } catch (err) {
        res.status(404).json({
            status: "ERROR",
            message: err
        });
    }
};

export default findBoba;
