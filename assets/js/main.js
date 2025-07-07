$(document).ready(function() {
    general_utils();
    blog_posts();
});

function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 1000);
    });
}

function blog_posts() {

    // Static blog posts from your Medium
    let posts = [
        {
            url: 'https://medium.com/@ktnnguy/from-click-to-conversion-building-smarter-marketing-pipelines-with-modern-data-engineering-4c3011b72a65',
            title: 'From Click to Conversion: Building Smarter Marketing Pipelines',
        }
        // You can add more Medium posts here
    ];

    let post_html = [];

    for (let post of posts) {
        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">
            <div class="blog-link">
                <h3><a href="${post.url}" target="_blank">${post.title}</a></h3>            
            </div>
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;
        post_html.push(post_template);
    }

    // Link to full blog
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://medium.com/@ktnnguy');">
        <div class="blog-link">
            <h3><a href="https://medium.com/@ktnnguy" target="_blank">Visit my Medium for more posts</a></h3>            
        </div>
        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);
}

function blog_link_click(url) {
    window.open(url, '_blank');
}
