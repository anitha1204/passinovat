import React from 'react';
import bannerimg from '../assets/Rectangle 5.png';
import Footer from '../components/Footer';

export default function TechnologyStack() {
    return (
        <>
            <div className="flex justify-center">
                <img
                    src={bannerimg}
                    alt=""
                    style={{ width: "1318px", height: "176.09px" }}
                    className="rounded-[50px] object-cover"
                />
            </div>

          
            <div className="flex flex-col items-center mt-12">
                <h3 className="text-2xl md:text-4xl text-center mb-4 text-secondary font-semibold">Technology Stack</h3>
                <table className=" text-center shadow-lg mt-12 text-2xl font-semibold " style={{ width: "743.04px", height: "375.46px" }}>
                    <thead>
                        <tr>
                            <th className="px-4 py-5 border-2 border-black text-orange-500 text-2xl font-semibold">Front End</th>
                            <th className="px-4 py-5 border-2 border-black text-orange-500 text-2xl font-semibold">Back End</th>
                            <th className="px-4 py-5 border-2 border-black text-orange-500 text-2xl font-semibold">Mobility</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-3 border-2 border-black text-secondary">HTML</td>
                            <td className="px-4 py-3 border-2 border-black text-secondary">PHP</td>
                            <td className="px-4 py-3 border-2 border-black text-secondary">ANDROID</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border-2 border-black text-secondary">CSS</td>
                            <td className="px-4 py-3 border-2 border-black text-secondary">JAVA</td>
                            <td className="px-4 py-3 border-2 border-black text-secondary">iOS</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border-2 border-black text-secondary">JS</td>
                            <td className="px-4 py-3 border-2 border-black text-secondary">NODE JS</td>
                            <td className="px-4 py-3 border-2 border-black text-secondary">FLUTTER</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border-2 border-black text-secondary">DOT NET</td>
                            <td className="px-4 py-3 border-2 border-black text-secondary">SPRING</td>
                            <td className="px-4 py-3 border-2 border-black"></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border-2 border-black text-secondary">XML</td>
                            <td className="px-4 py-3 border-2 border-black text-secondary">SQL SERVER</td>
                            <td className="px-4 py-3 border-2 border-black"></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border-2 border-black"></td>
                            <td className="px-4 py-3 border-2 border-black text-secondary">MONGO DB</td>
                            <td className="px-4 py-3 border-2 border-black"></td>
                        </tr>
                    </tbody>
                </table>
            </div>

         <Footer/>

        </>
    );
}
