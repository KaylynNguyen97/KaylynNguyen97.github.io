$(document).ready(() => {
    render_projects('featured');
});

let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/IMDB_Logo_2016.png',
            link: 'https://github.com/KaylynNguyen97/IMdbMachineLearning',
            title: 'IMDb Movie Success Prediction',
            demo: '',
            technologies: ['Python', 'Pandas', 'Scikit-learn'],
            description: 'Predicted IMDb ratings using machine learning models and movie metadata. Explored feature engineering, regression modeling, and evaluation.',
            categories: ['featured', 'ml']
        },
        {
            image: 'assets/images/online_customer_attraction_1_7d1a5bc78b.jpg',
            link: 'https://github.com/KaylynNguyen97/CustomerChurn',
            title: 'Customer Churn Prediction',
            demo: '',
            technologies: ['Python', 'Random Forest', 'Logistic Regression'],
            description: 'Developed classification models to identify churn-prone customers. Evaluated model performance using AUC, precision, and recall.',
            categories: ['featured', 'ml']
        },
        {
            image: 'assets/images/yelp-red-1920.jpg',
            link: 'https://github.com/KaylynNguyen97/YelpSentimentAnalysis',
            title: 'Yelp Sentiment Analysis',
            demo: '',
            technologies: ['Python', 'NLP', 'TF-IDF'],
            description: 'Used NLP techniques to classify sentiment in Yelp reviews. Compared model accuracy and visualized results with confusion matrices.',
            categories: ['ml']
        },
        {
            image: 'assets/images/healthy-eating-balanced-diet-concept-vector.jpg',
            link: 'https://github.com/KaylynNguyen97/DataDesignRepresentationDietaryCompass',
            title: 'Dietary Compass',
            demo: '',
            technologies: ['Python', 'API'],
            description: 'Data design and representation using nutrition data to illustrate health risks and benefits across major food categories.',
            categories: ['viz']
        },
        {
            image: 'assets/images/sephora-logo-in-black-5e3190d84gxhuatx.jpg',
            link: 'https://github.com/KaylynNguyen97/SephoraSQL',
            title: 'Sephora SQL Analysis',
            demo: '',
            technologies: ['SQL', 'ETL', 'Data Cleaning'],
            description: 'Analyzed product and review data from Sephora using SQL queries. Derived insights into product trends and customer satisfaction.',
            categories: ['sql', 'viz']
        }
    ];

    let projects = [];
    if (slug === 'all') {
        projects = projects_obj.map(project_mapper);
    } else {
        projects = projects_obj
            .filter(project => project.categories.includes(slug))
            .map(project_mapper);
    }

    projects_area.hide().html(projects).fadeIn();
};

let project_mapper = project => {
    return `
        <div class="wrapper">
            <div class="card radius shadowDepth1">
                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}" target="_blank">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>` : ''}

                <div class="card__content card__padding">
                    <article class="card__article">
                        <h2><a href="${project.link}" target="_blank">${project.title}</a></h2>
                        <p class="paragraph-text-normal">
                            ${project.description}
                            ${project.demo ? `<a href="${project.demo}" target="_blank">Demo</a>` : ''}
                        </p>
                    </article>
                    
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
};

let selected = (slug) => {
    render_projects(slug);
};
