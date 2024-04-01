import React from 'react';

function Images() {
    const img1 = "https://s3-alpha-sig.figma.com/img/7147/9344/2501faa7f289434a9b99bafaa474cc0e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaiKcLib6BHgbGenz01f4b4Y97WRtzWkjVqcyvR3AvrdQF3Ax4lC5TlNaV9ugEFBQL59Pq3rsOaB0EuEa4EPvpiAWs~y2tjOGoRdRVEIoU30-YSOOHe-9E5QVy33TLhjFW4nyPgBBXIJcoPyQHovPWxAQFfm4eFkgNJwRLjkKhnuGj4M0ZIpSqeMjwaWU6NcECNa2rvqe6zldYClkuZywzsj0e8RZRR8DUekb14c6CquSbFC6WR1BPlTF9v3K5jBxXXGW5JnDSG75HsL8rM3Dk3-0~6nOQ5BxtP7JXvnHrXiabQoEJ~hxQvkxAO~2XxLcFYVGPWQAlFdtO2ts9F3fg__";
    const img2 = "https://s3-alpha-sig.figma.com/img/ff28/c642/d7258eeaa99e5ea5585055099ce474ea?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SBYp1biYL342EHOuj0zezUIPBOHurdJLbZ7iVIDd7aI03wSCP53T~hHaMcnOu~XDOp1WXh~N0iqbeIrQ1c-YSVusSz9-QRljuXoA4vOTH3ohrDss2dRPogaBN26MDKGWrby8O8oGOywcWdc1s2vRIIa9~C3ZG8tFmrgfVqLcp8ICpi3-Y0sTnzSiFI9HI0LXlWH1DjaKziutq7Rz7gWhp5Jg19TPjyrM~7dpT1MyhB4ilrn9HjmtqVj8CA-JC12H-p1M2M1hcpGoQ8YxM4Znc0O32uOP940AbePJDXEc8jcsVvTHGqrYLjoXn9GNjyz3o2KZR1xBqkO0DI2Qi58otA__";
    const img3 = "https://s3-alpha-sig.figma.com/img/a09a/b5b0/95547eb344eb0c0875a5194c38c5747c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b7ctjy8Aj4obnqfvNlEgjnM4Z77DzEKlMmpwW2-~ZzeH~vSW4UrqBJvbXhJhMv9WWjY~17ms~QVvsW5-u6xkaXOBwHQYWlSPYkbm5Nqt0QdV34b3alOC55BF4plBaNVxG9tKvTsLJUJwOYAZs9FNTpYkIm2BgKU~2TELWlchQHWZVi4j8D0h80~w5nBKNkXc60UG5VAj3RX7aWwuUpMvNObtiQip63GSq5mn9BVSr17HFbDRNIfwwDVZ0dogHX1UX1LL-tDnO~FvpvIjRER7RALZXXfyW1C0o0uEB8-W-tLEJ7pIUOXmzV-U1vQb06Y~da7XBkNhIhgtbUfBQqXU5w__";

    return (
        <div className="flex flex-wrap justify-center">
            <div className="max-w-sm rounded text-center shadow-lg m-4">
                <img className="w-full h-3/4" src={img1} alt="Image 1" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Image 1</div>
                    <p className="text-white">Explore large, destructible environments where no two games are ever the same.</p>
                </div>
            </div>
            <div className="max-w-sm rounded text-center shadow-lg m-4">
                <img className="w-full h-3/4" src={img2} alt="Image 2" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Image 2</div>
                    <p className="text-white">Team up with friends by sprinting, climbing, and smashing your way to earn your Victory Royale.</p>
                </div>
            </div>
            <div className="max-w-sm rounded text-center shadow-lg m-4">
                <img className="w-full h-3/4" src={img3} alt="Image 3" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Image 3</div>
                    <p className="text-white">Discover even more ways to play across thousands of creator-made game genres.</p>
                </div>
            </div>
        </div>
    );
}

export default Images;
