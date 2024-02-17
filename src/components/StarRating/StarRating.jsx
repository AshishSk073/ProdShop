import { Star, StarHalf } from "lucide-react";

function StarRating({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const renderStars = () => {
        const stars = [];

        for (let i = 0; i < 5; i++) {
            stars.push(<Star key={i} fill="#111" strokeWidth={0} size="15" />);
        }

        for (let i = 0; i < fullStars; i++) {
            stars[i] = <Star key={i} fill="#FFD700" strokeWidth={0} size="15" />;
        }

        if (hasHalfStar) {
            stars[fullStars] = (
                <div key="half" className="star-half-container">
                    <StarHalf fill="#FFD700" strokeWidth={0} size="15" />
                    <StarHalf fill="#111" strokeWidth={0} size="15" className="star-half-background" />
                </div>
            );
        }

        return stars;
    };

    return (
        <div className="star_rating">
            <div className="stars">{renderStars()}</div>
        </div>
    );
}

export default StarRating;
