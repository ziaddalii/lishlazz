import StoreLocationsForm from "@/components/common/form/store-locations.form";
import StoreLocationTabs from "./store-location-tabs.section";
import StoreCard from "@/components/common/cards/store.card";

const stores = [
    {
        id:"1",
        branch: {
            en:"Suez",
            ar:"سويس",
        },
        address:{
            en:"23-Jul, Suez, Suez Governorate, Egypt",
            ar:"407شارع 23يوليو, امام سينما مصر , محافظة السويس , مصر",
        },
        open_at:{
            en:"Opening Hours 11:00 AM to 02:50 AM",
            ar:"ساعات العمل من 11:00 AM إلى 02:50 AM",
        },
    },
    {
        id:"2",
        branch: {
            en:"Suez",
            ar:"سويس",
        },
        address:{
            en:"23-Jul, Suez, Suez Governorate, Egypt",
            ar:"407شارع 23يوليو, امام سينما مصر , محافظة السويس , مصر",
        },
        open_at:{
            en:"Opening Hours 11:00 AM to 02:50 AM",
            ar:"ساعات العمل من 11:00 AM إلى 02:50 AM",
        },
    },
    {
        id:"3",
        branch: {
            en:"Suez",
            ar:"سويس",
        },
        address:{
            en:"23-Jul, Suez, Suez Governorate, Egypt",
            ar:"407شارع 23يوليو, امام سينما مصر , محافظة السويس , مصر",
        },
        open_at:{
            en:"Opening Hours 11:00 AM to 02:50 AM",
            ar:"ساعات العمل من 11:00 AM إلى 02:50 AM",
        },
    },
    {
        id:"4",
        branch: {
            en:"Suez",
            ar:"سويس",
        },
        address:{
            en:"23-Jul, Suez, Suez Governorate, Egypt",
            ar:"407شارع 23يوليو, امام سينما مصر , محافظة السويس , مصر",
        },
        open_at:{
            en:"Opening Hours 11:00 AM to 02:50 AM",
            ar:"ساعات العمل من 11:00 AM إلى 02:50 AM",
        },
    },
    {
        id:"5",
        branch: {
            en:"Suez",
            ar:"سويس",
        },
        address:{
            en:"23-Jul, Suez, Suez Governorate, Egypt",
            ar:"407شارع 23يوليو, امام سينما مصر , محافظة السويس , مصر",
        },
        open_at:{
            en:"Opening Hours 11:00 AM to 02:50 AM",
            ar:"ساعات العمل من 11:00 AM إلى 02:50 AM",
        },
    },
    {
        id:"6",
        branch: {
            en:"Suez",
            ar:"سويس",
        },
        address:{
            en:"23-Jul, Suez, Suez Governorate, Egypt",
            ar:"407شارع 23يوليو, امام سينما مصر , محافظة السويس , مصر",
        },
        open_at:{
            en:"Opening Hours 11:00 AM to 02:50 AM",
            ar:"ساعات العمل من 11:00 AM إلى 02:50 AM",
        },
    },
    {
        id:"7",
        branch: {
            en:"Suez",
            ar:"سويس",
        },
        address:{
            en:"23-Jul, Suez, Suez Governorate, Egypt",
            ar:"407شارع 23يوليو, امام سينما مصر , محافظة السويس , مصر",
        },
        open_at:{
            en:"Opening Hours 11:00 AM to 02:50 AM",
            ar:"ساعات العمل من 11:00 AM إلى 02:50 AM",
        },
    },
    {
        id:"8",
        branch: {
            en:"Suez",
            ar:"سويس",
        },
        address:{
            en:"23-Jul, Suez, Suez Governorate, Egypt",
            ar:"407شارع 23يوليو, امام سينما مصر , محافظة السويس , مصر",
        },
        open_at:{
            en:"Opening Hours 11:00 AM to 02:50 AM",
            ar:"ساعات العمل من 11:00 AM إلى 02:50 AM",
        },
    },
];
const NearestStoreSection = ({ locale }) => {

    return (
        <section className="bg-white rounded grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
            <div>
                <StoreLocationsForm locale={locale} />
                <StoreLocationTabs />

                <article className="max-h-[60vh] space-y-4 p-4 overflow-y-scroll">
                    {
                        stores.map((store) => {
                            return(
                                <StoreCard key={store.id} store={store} locale={locale}/>
                            );
                        })
                    }
                </article>
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94242.01296287174!2d39.08543670699913!3d21.564573236764062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3db477bf04a1b%3A0x9d3445f6f61cedd5!2sLishlazz!5e0!3m2!1sen!2seg!4v1702304747982!5m2!1sen!2seg"
                    className="min-h-[500px]"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default NearestStoreSection;
