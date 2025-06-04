import React from 'react';

function About() {
    return (
        <div className="p-10 bg-white text-gray-800">
            <h2 className="text-4xl font-bold mb-6 text-green-700 text-center capitalize">About Jannyojana</h2>
            <p className="text-lg leading-relaxed text-justify">
            Jannyojana is a bilingual web portal (English and Hindi) created to bridge the gap between citizens of 
            Ramgarh—especially in rural and tribal areas—and the numerous government welfare schemes available to them. 
            Our mission is to promote awareness, simplify access, and ensure no eligible person is left behind due to 
            lack of information.
            </p>

            <p className="text-lg leading-relaxed mt-4 text-justify">
                The portal is structured into six key categories: Women and Child Welfare, Education and 
                Youth Development, Agriculture and Farmer Welfare, Social Security and Financial Assistance, 
                Healthcare and Insurance, and Housing, Employment and Infrastructure. Each section provides citizens 
                with vital information and resources in a clear, accessible format.
            </p>

            <p className="text-lg leading-relaxed mt-4 text-justify">
                For every scheme listed, Jannyojana offers three key utilities:
            </p>

            <p className="text-lg leading-relaxed mt-4 text-justify">
                <li>A direct link to the official government portal for applying or learning more.</li>
                <li>An upload section where users can submit necessary documents to prepare for application.</li>
                <li>A YouTube video guide for easy visual understanding of the scheme and its process.</li>
            </p>

            <p className="text-lg leading-relaxed mt-4 text-justify">
                Jannyojana is more than just an information hub—it’s a step towards empowerment, digital inclusion, and 
                social upliftment. Together, let’s make every citizen aware, informed, and connected to their rightful benefits.
            </p>
        </div>
    );
}

export default About;
