const carsData = {
    "cars": [
        {
            "id": 1,
            "img": "img/benz1.jpg",
            "name": "Mercedes-Benz S-Class",
            "description": "The Mercedes-Benz S-Class is the epitome of luxury and sophistication. Known for its opulent interior, cutting-edge technology, and exceptional performance, it offers an unmatched driving experience.",
            "year": 2023,
            "engine": "3.0L V6 Biturbo",
            "horsepower": 429,
            "topSpeed": 155,
            "acceleration": 4.3,
            "price": "$110,000"
        },
        {
            "id": 2,
            "img": "img/benz2.jpg",
            "name": "Mercedes-Benz E-Class",
            "description": "The Mercedes-Benz E-Class combines comfort and elegance with advanced safety features. This midsize luxury sedan offers a smooth ride, spacious interior, and innovative technology, making it a top choice for executives and families.",
            "year": 2023,
            "engine": "2.0L Inline-4 Turbo",
            "horsepower": 255,
            "topSpeed": 130,
            "acceleration": 6.1,
            "price": "$60,000"
        },
        {
            "id": 3,
            "img": "img/benz3.jpg",
            "name": "Mercedes-Benz GLC",
            "description": "The Mercedes-Benz GLC is a luxurious SUV that seamlessly combines style and performance. With its powerful engine options, high-quality interior, and advanced infotainment system, it delivers a premium driving experience.",
            "year": 2023,
            "engine": "2.0L Inline-4 Turbo",
            "horsepower": 255,
            "topSpeed": 130,
            "acceleration": 6.2,
            "price": "$45,000"
        },
        {
            "id": 4,
            "img": "img/benz4.jpg",
            "name": "Mercedes-Benz C-Class",
            "description": "The Mercedes-Benz C-Class is a compact luxury sedan that offers a perfect balance of sportiness and sophistication. Its sleek design, agile handling, and state-of-the-art features make it a popular choice among driving enthusiasts.",
            "year": 2023,
            "engine": "2.0L Inline-4 Turbo",
            "horsepower": 255,
            "topSpeed": 130,
            "acceleration": 5.7,
            "price": "$42,000"
        },
        {
            "id": 5,
            "img": "img/benz5.jpg",
            "name": "Mercedes-Benz GLE",
            "description": "The Mercedes-Benz GLE is a versatile SUV that combines power, comfort, and innovation. With its spacious cabin, robust engine options, and advanced safety technologies, it provides an exceptional driving experience for both city and off-road adventures.",
            "year": 2023,
            "engine": "3.5L V6",
            "horsepower": 362,
            "topSpeed": 155,
            "acceleration": 5.3,
            "price": "$55,000"
        },
        {
            "id": 6,
            "img": "img/benz1.jpg",
            "name": "Mercedes-Benz A-Class",
            "description": "The Mercedes-Benz A-Class is a stylish and compact luxury hatchback known for its modern design and impressive performance. Equipped with advanced technology and safety features, it offers a dynamic and comfortable ride.",
            "year": 2023,
            "engine": "2.0L Inline-4 Turbo",
            "horsepower": 188,
            "topSpeed": 130,
            "acceleration": 7.2,
            "price": "$35,000"
        },
        {
            "id": 7,
            "name": "Mercedes-Benz CLA",
            "description": "The Mercedes-Benz CLA is a sleek and sporty luxury sedan that captivates with its aerodynamic design and powerful performance. It features a refined interior, cutting-edge technology, and a smooth ride, making it an ideal choice for those seeking both style and substance.",
            "year": 2023,
            "engine": "2.0L Inline-4 Turbo",
            "horsepower": 221,
            "topSpeed": 130,
            "acceleration": 6.3,
            "price": "$38,000"
        },
        {
            "id": 8,
            "name": "Mercedes-Benz GLA",
            "description": "The Mercedes-Benz GLA is a compact luxury SUV that combines agility with functionality. Its nimble handling, premium interior, and advanced safety features make it an attractive choice for urban explorers.",
            "year": 2023,
            "engine": "2.0L Inline-4 Turbo",
            "horsepower": 221,
            "topSpeed": 130,
            "acceleration": 7.2,
            "price": "$34,000"
        },
        {
            "id": 9,
            "name": "Mercedes-Benz GLB",
            "description": "The Mercedes-Benz GLB is a versatile compact SUV that balances spaciousness and style. With its comfortable interior, robust performance, and impressive cargo space, it offers practicality without compromising on luxury.",
            "year": 2023,
            "engine": "2.0L Inline-4 Turbo",
            "horsepower": 221,
            "topSpeed": 130,
            "acceleration": 6.9,
            "price": "$36,000"
        },
        {
            "id": 10,
            "name": "Mercedes-Benz GLS",
            "description": "The Mercedes-Benz GLS is a full-size luxury SUV designed for ultimate comfort and grandeur. With its spacious third-row seating, powerful engine options, and advanced entertainment features, it ensures a luxurious travel experience for the entire family.",
            "year": 2023,
            "engine": "4.0L V8 Biturbo",
            "horsepower": 483,
            "topSpeed": 155,
            "acceleration": 5.2,
            "price": "$75,000"
        },
        {
            "id": 11,
            "name": "Mercedes-Benz G-Class",
            "description": "The Mercedes-Benz G-Class is an iconic luxury SUV renowned for its bold design and off-road capabilities. With its rugged exterior, plush interior, and powerful performance, it offers a unique blend of luxury and adventure.",
            "year": 2023,
            "engine": "4.0L V8 Biturbo",
            "horsepower": 577,
            "topSpeed": 149,
            "acceleration": 4.5,
            "price": "$130,000"
        },
        {
            "id": 12,
            "name": "Mercedes-Benz SL",
            "description": "The Mercedes-Benz SL is a legendary roadster that combines thrilling performance with timeless elegance. With its retractable hardtop, powerful engine options, and luxurious features, it offers an exhilarating open-air driving experience.",
            "year": 2023,
            "engine": "3.0L Inline-6 Turbo",
            "horsepower": 362,
            "topSpeed": 155,
            "acceleration": 4.9,
            "price": "$91,000"
        },
        {
            "id": 13,
            "name": "Mercedes-Benz SLC",
            "description": "The Mercedes-Benz SLC is a compact luxury convertible known for its sporty design and agile handling. With its retractable roof, responsive engine options, and well-appointed interior, it delivers an enjoyable driving experience.",
            "year": 2023,
            "engine": "2.0L Inline-4 Turbo",
            "horsepower": 241,
            "topSpeed": 130,
            "acceleration": 5.7,
            "price": "$65,000"
        },
        {
            "id": 14,
            "name": "Mercedes-Benz AMG GT",
            "description": "The Mercedes-Benz AMG GT is a high-performance sports car that excites with its powerful engine, precise handling, and stunning design. It offers a thrilling driving experience, combining speed and luxury in perfect harmony.",
            "year": 2023,
            "engine": "4.0L V8 Biturbo",
            "horsepower": 523,
            "topSpeed": 193,
            "acceleration": 3.5,
            "price": "$120,000"
        },
        {
            "id": 15,
            "name": "Mercedes-Benz EQS",
            "description": "The Mercedes-Benz EQS is a groundbreaking all-electric luxury sedan that sets new standards for eco-friendly driving. With its innovative technology, spacious interior, and long-range capabilities, it defines the future of electric mobility.",
            "year": 2023,
            "engine": "Electric",
            "horsepower": "N/A",
            "topSpeed": "N/A",
            "acceleration": "N/A",
            "price": "TBD"
        }
    ]
};

export default carsData;
