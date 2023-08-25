$(document).ready(function() {
    let currentTestimonial = 0;
    const testimonials = $('.testimonial');
    testimonials.hide();
    testimonials.eq(currentTestimonial).show();

    setInterval(function() {
        testimonials.eq(currentTestimonial).fadeOut(500, function() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials.eq(currentTestimonial).fadeIn(500);
        });
    }, 5000); // Change every 5 seconds
});
