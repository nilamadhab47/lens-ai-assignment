import { Market } from '@/utlis/Market';
import React from 'react';


function MarketS() {
    return (
        <div className="section" id='market'>
            <h1 className="text-primaryT text-[52px]">Market</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {Market.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center gap-8 md:flex-row ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                        }`}
                    >
                        <div className="md:w-1/2">
                            <img src={item.Image} alt="Image" className="w-full" />
                        </div>
                        <div className="md:w-1/2 p-4">
                            <h6 className="text-primaryT text-[30px] font-semibold">{item.heading}</h6>
                            <p className="text-black text-[18px] font-light pt-8 lg:pr-[7rem] pr-0" style={{lineHeight: '1.55'}}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MarketS;
