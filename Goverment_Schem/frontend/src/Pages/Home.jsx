import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import About from './About';
import Context from './Context';

const arr1 = [{img:"https://static.punjabkesari.in/multimedia/2025_2image_16_20_184124066maiyasammanyojanahemant.jpg",
    application:"https://mmmsy.jharkhand.gov.in/",
    Documents:"Passport-size Photograph,Aadhaar Card,Ration Card,Voter ID,Pan Card,Bank Passbook,Self-declaration Letter",
    youtube:"https://youtu.be/c6JXvyvU0e0?si=Opooe6r92Z6A0fEI"
},{
        img:"https://images.news18.com/ibnkhabar/uploads/2023/03/2631271_HYP_0_FEATUREIMG-20230311-WA0009.jpg?impolicy=website&width=640&height=480",
        application:"https://savitribaipksy.jharkhand.gov.in/",
        Documents:"Aadhaar Card,Residence Proof,Antyodaya Card,Certificate of Inclusion under SECC-2011,School Enrollment Certificate,Income Certificate,Passport-sized Photograph,Bank Account Details",
        youtube:"https://youtu.be/T0GpJYqVmAQ?si=3Jpqc5O0yYyK8OXI"
},{
        img:"https://i0.wp.com/cooljobinfo.com/wp-content/uploads/2023/10/kanya-vivah-sahayata-yojana.png?fit=2240%2C1260&ssl=1",
        application:"https://shramadhan.jharkhand.gov.in/",
        Documents:"Aadhaar Card of the Registered Worker,Aadhaar Card of the Bride and the Groom,Residential Certificate / Domicile Certificate,Proof of Identity,eSHRAM Card,Passport Sized Photograph,Proof of Registration as a Construction Worker,Details of the Bank Account of the Registered Worker,Income Certificate of the Registered Worker,Marriage Certificate,Proof of Age of the Bride and the Groom",
        youtube:"https://youtu.be/feynRqgRtTc?si=RcYkbaG0Q5SErho7"
}];

const arr2 = [{
    img:"https://jharnet.in/wp-content/uploads/2024/11/e-kalyan-jharkhand-scholarship-application-form.webp",
    application:"https://ekalyan.cgg.gov.in/",
    Documents:"Caste Certificate,Income Certificate,Residence Certificate,Bonafide Certificate,Marks Sheets,Aadhar Card,Degree/Diploma Certificates,Students Photo",
    youtube:"https://youtu.be/O3hhy4wkE7g?si=rEm-hyCJc8oVqkvd"
},{
    img:"https://graminsarkariyojna.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-15-at-7.53.19-PM-min.jpeg",
    application:"https://www.jharkhand.gov.in/PDirectorate/directorate=cb9cedf50ee60f59d168ebfff812a261",
    Documents:"Aadhaar Card,Colour Passport-size Photograph,Admission Document/Letter,Ration Card,Resident Certificate,Income Certificate,Caste Certificate,Bank Passbook,Birth Certificate.",
    youtube:"https://youtu.be/rSofXGO6qlA?si=2D_Etxsgy9c26YBH"
},{
    img:"https://nsplskills.com/wp-content/uploads/2023/10/3.png",
    application:"https://jsdm.jharkhand.gov.in/jsdm/cms/en/-------jharkhand",
    Documents:"Job Applications,Proof of Age (e.g., birth certificate, Aadhaar card),Educational and Professional Qualification Certificates (e.g., degree certificates, diploma certificates),Experience Certificates (if applicable),Other relevant certificates (e.g., caste certificates, disability certificates, etc.).",
    youtube:"https://youtu.be/awRQjC2QuOo?si=llYf54B1FwXP5eAZ"
}];

const arr3 = [{
    img:"https://pm-yojana.in/uploads/images/202207/webp/image_750x_62e24b0a5d393.webp",
    application:"https://jrfry.jharkhand.gov.in/",
    Documents:"Aadhaar Card,Passport-size photograph,Proof of age,Bank account details/bank passbook,Land papers (LPC/Land Receipts/ Vansawali)/Bandobasti Patta issued by Circle Office,Sahmati Patra from Raiyat in case the applicant is a Bataidaar Farmer,Complete details of selected crops for sowing along with land area,Other necessary documents if required",
    youtube:"https://youtu.be/lcjOQjPBtrA?si=vur2xVG08k-NrkwF"
},{
    img:"https://assets.tractorjunction.com/tractor-junction/assets/images/images/news/sarkari-yojana-1658137830.webp",
    application:"https://ksy.jharkhand.gov.in/",
    Documents:"Aadhaar Card,Ration Card (Aadhaar-linked),Proof of Ownership/Access to Land and Water Source,Group/Organization Registration Certificate (if applicable),Mobile Number (Aadhaar-linked),Bank Account Details (Aadhaar-linked).",
    youtube:"https://youtu.be/s1jO-4TQSMY?si=qSv12DnV7fY3Qn4n"
},{
    img:"https://jkrmy.jharkhand.gov.in/img/jkrmylogo1.png",
    application:"http://jkrmy.jharkhand.gov.in",
    Documents:"Aadhaar Card,Passport-size photograph,Proof of age,Ration card,Kisan Credit Card (KCC),Bank account details/bank passbook,Other necessary documents if required",
    youtube:"https://youtu.be/SOrQgYYsmTU?si=iAghTXYwjEGjUVPy"
}];

const arr4 = [{
    img:"https://edistrictportal.com/wp-content/uploads/2024/06/aahar-jharkhand.jpeg",
    application:"http://aahar.jharkhand.gov.in",
    Documents:"Birth Certificate,Aadhaar Card,Educational Documents,PAN Card,Passport,Driving License,Voter Identity Card (ID)",
    youtube:"https://youtu.be/rbC5mz8hYto?si=yIhCzFaj_kK04_5r"
},{
    img:"https://www.sarkariyojnaa.com/wp-content/uploads/2023/03/Jharkhand-Petrol-Subsidy-Registration-2023-1024x683.webp",
    application:"https://aahar.jharkhand.gov.in/",
    Documents:"Copy of Ration Card (NFSA/Jharkhand State Food Security Scheme), Aadhaar Card of the Applicant (Linked to the Bank Account), Bank Passbook, Valid Driving License, Vehicle Registration Certificate (Two-Wheeler Registered in Jharkhand)",
    youtube:"https://youtu.be/0PGOASgCFZ0?si=5awNIG_0G2bgOe-b"
},{
    img:"https://pmawaslist.in/wp-content/uploads/2024/05/Jharkhand-Vridha-Pension-Yojana-List-1024x576.webp",
    application:"https://jharsewa.jharkhand.gov.in/getServiceDesc.html?serviceId=3590002",
    Documents:"Application Form: A properly filled and self-attested application form, Age Proof: Birth certificate or other acceptable proof of age, Domicile Certificate: Proof of residency in Jharkhand, Bank Passbook: For direct credit of the pension, Aadhar Card",
    youtube:"https://youtu.be/x_hI84hA54g?si=_MoKc8dcOrUtZnRt"
}];

const arr5 = [{
    img:"https://www.educationjhar.com/wp-content/uploads/2024/07/%E0%A4%9D%E0%A4%BE%E0%A4%B0%E0%A4%96%E0%A4%A3%E0%A5%8D%E0%A4%A1-%E0%A4%B0%E0%A4%BE%E0%A4%9C%E0%A5%8D%E0%A4%AF-%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%BF%E0%A4%AF%E0%A5%8B%E0%A4%82-%E0%A4%95%E0%A4%BE-%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A5%8D%E0%A4%AF-%E0%A4%AC%E0%A5%80%E0%A4%AE%E0%A4%BE-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE-min-1-1536x1024-1-860x573.jpg",
    application:"http://prdjharkhand.in/",
    Documents:"Aadhaar Card (Linked with Ration Card),Ration Card (Pink, Yellow, or Green)",
    youtube:"https://youtu.be/nwWk3d4DqC0?si=GBUzdKKwvt7ggK9n"
},{
    img:"https://sarkarihelp24.in/wp-content/uploads/2024/10/image-2-2.webp",
    application:"https://bis.jharkhand.gov.in/",
    Documents:"Identity Proof i.e. Aadhaar Card, Voter Card,Bank Account Details,Proof of Age,Identity Card of the Registered Worker,Proof of Membership,Any Other Documents as Required.",
    youtube:"https://youtu.be/NzOhEmadHOo?si=h9qBOAntyPT67b2x"
},{
    img:"https://sarkarihelp24.in/wp-content/uploads/2024/07/Mukhyamantri-Vishesh-Swasthya-Sahayata-Yojana.webp",
    application:"https://shramadhan.jharkhand.gov.in/",
    Documents:"Aadhaar Card,Residential Certificate / Domicile Certificate,Proof of Identity,eSHRAM Card,Passport Sized Photograph,Proof of Registration as a Construction Worker,Details of the Bank Account,Income Certificate,Proof of the Medical Condition,Proof of Admission into the Hospital.",
    youtube:"https://youtu.be/SHfevmjb3dk?si=08KiDBmZKdzknvUf"
}];

const arr6 = [{
    img:"https://sarkariyojnainsider.com/wp-content/uploads/2024/09/Abua-Awas-Yojana-Jharkhand.webp",
    application:"https://aay.jharkhand.gov.in",
    Documents:"Aadhaar Card,Bank Passbook,Job Card,Address Proof,Caste Certificate,Any Other Document If Required.",
    youtube:"https://youtu.be/qXsJImCoFSY?si=ZsZf0ZYJ9AMhIfpQ"
},{
    img:"https://etvbharatimages.akamaized.net/etvbharat/prod-images/768-512-11983914-thumbnail-3x2-hzzzz.jpg??imwidth=3840",
    application:"https://msy.jharkhand.gov.in/",
    Documents:"Aadhaar Card,Voter ID,Driving License,Electricity Bill,Bank Passbook Copy,Residential Certificate (issued by a competent authority)",
    youtube:"https://youtu.be/iusa8_dJtC0?si=mWlJwhqPfksr5cUJ"
},{
    img:"https://img.etimg.com/thumb/msid-84521627,width-300,height-225,imgsize-303928,resizemode-75/construction-worker-bccl.jpg",
    application:"https://shramadhan.jharkhand.gov.in/",
    Documents:"Death Certificate,Copy of FIR/Post-mortem Report (if applicable),Copy of the deceased migrant’s passport and visa,Income Certificate of the dependent,Residence Certificate of the deceased migrant in Jharkhand,Two Self-attested Photographs of the dependent/claimant.",
    youtube:"https://youtu.be/DqfkgetdIQU?si=Oantg3JvuX5Lmc69"
}];

const SchemeCard = ({ img, application, Documents, youtube }) => (
    <div id='anime' className="border rounded-lg overflow-hidden shadow p-2 bg-white">
        <img src={img} alt="scheme" className="h-40 w-full object-cover rounded" />
        <div className="mt-2">
            <a href={application} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline block">Apply Here</a>
            <p className="mt-2 text-sm text-gray-700"><strong>Documents:</strong> {Documents}</p>
            <a href={youtube} target="_blank" rel="noopener noreferrer" className="text-red-600 underline mt-2 block">Watch Guide Video</a>
        </div>
    </div>
);

function Home() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToHome = () => homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });

    const renderSection = (title, dataArray) => (
        <div className="border p-4 m-2 rounded shadow bg-white">
            <div className="bg-green-700 text-white p-4 flex justify-center items-center rounded">
                <h2 className="text-lg font-semibold text-center">{title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {dataArray.map((item, index) => (
                    <SchemeCard key={index} {...item} />
                ))}
            </div>
        </div>
    );

    return (
        <div>
            <Navbar
                scrollToHome={scrollToHome}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
            />

            {/* Home Section */}
            <section ref={homeRef} className="p-4 bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {renderSection("Women & Child Welfare Schemes", arr1)}
                    {renderSection("Education & Youth Development", arr2)}
                    {renderSection("Agriculture & Farmer Welfare", arr3)}
                    {renderSection("Social Security & Financial Assistance", arr4)}
                    {renderSection("Healthcare & Insurance", arr5)}
                    {renderSection("Housing, Employment & Infrastructure", arr6)}
                </div>
            </section>

            {/* About Section */}
            <section ref={aboutRef} className="min-h-screen bg-white">
                <About />
            </section>

            {/* Contact Section */}
            <section ref={contactRef} className="min-h-screen bg-gray-50">
                <Context />
            </section>
        </div>
    );
}

export default Home;