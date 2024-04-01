import React from 'react'

function Contribution() {
    return (
        <div>
            <div className="max-w-4xl mx-auto p-8 bg-black rounded-md shadow-lg flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-4 text-white">Our Contribution</h2>
                <p className="text-gray-50 mb-6">
                    Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.
                </p>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center justify-center  text-white p-6 rounded-md">
                        <div>
                            <p className="text-4xl font-semibold">5M</p>
                            <p className="text-sm">Daily User Engagements</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center  text-white p-6 rounded-md">
                        <div>
                            <p className="text-4xl font-semibold">$500K</p>
                            <p className="text-sm">Revenue Surge for an Platform</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center  text-white p-6 rounded-md">
                        <div>
                            <p className="text-4xl font-semibold">10X</p>
                            <p className="text-sm">ROAS on all our marketing campaigns</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contribution