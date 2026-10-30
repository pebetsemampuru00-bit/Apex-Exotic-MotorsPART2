// Accordion
document.addEventListener('DOMContentLoaded', function () {
    var acc = document.querySelectorAll('.accordion');
    acc.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });
});

// Lightbox
document.addEventListener('DOMContentLoaded', function () {
    var box = document.createElement('div');
    box.id = 'lightbox';
    box.className = 'lightbox';
    box.innerHTML = '<span class="close-lightbox">&times;</span><img class="lightbox-content" id="lightbox-img">';
    document.body.appendChild(box);

    var img = document.getElementById('lightbox-img');
    var close = box.querySelector('.close-lightbox');

    // Attach to all gallery images
    document.querySelectorAll('.gallery-item').forEach(function (g) {
        g.addEventListener('click', function () {
            box.style.display = 'block';
            img.src = this.src;
            img.alt = this.alt;
        });
    });

    close.addEventListener('click', function () {
        box.style.display = 'none';
    });

    box.addEventListener('click', function (e) {
        if (e.target === box) {
            box.style.display = 'none';
        }
    });
});

// Dynamic vehicle loading
document.addEventListener('DOMContentLoaded', function () {

    // Vehicle data
    var vehicles = [
        { name: 'Ferrari 296 GTB', cat: 'supercars', img: 'images/6.jpeg', spec: 'V6 Hybrid, 819 hp, 0-100 km/h in 2.9 sec' },
        { name: 'Lamborghini Huracán EVO', cat: 'supercars', img: 'images/5.jpeg', spec: 'V10, 640 hp, 0-100 km/h in 2.9 sec' },
        { name: 'Mercedes Benz G63 AMG', cat: 'luxury-suvs', img: 'images/10.jpeg', spec: 'V8, 577 hp, 0-100 km/h in 4.5 sec' },
        { name: 'Range Rover Sport', cat: 'luxury-suvs', img: 'images/range rover.jpg', spec: 'V8, 575 hp, 0-100 km/h in 4.5 sec' },
        { name: 'BMW M5 Competition', cat: 'executive-cars', img: 'images/11.jpeg', spec: 'V8, 600 hp, 0-100 km/h in 3.4 sec' },
        { name: 'Audi RS7', cat: 'executive-cars', img: 'images/rs7.jpeg', spec: 'V8, 591 hp, 0-100 km/h in 3.6 sec' }
    ];

    // Only run on products page
    var supercarsList = document.querySelector('#supercars ul');
    if (!supercarsList) return;

    // Empty the lists so JS builds them
    document.querySelector('#supercars ul').innerHTML = '';
    document.querySelector('#luxury-suvs ul').innerHTML = '';
    document.querySelector('#executive-cars ul').innerHTML = '';

    // Render one category
    function renderVehicles(list, category) {
        list.innerHTML = '';
        vehicles.forEach(function (v) {
            if (v.cat !== category) return;

            var li = document.createElement('li');
            li.className = 'vehicle-card';
            li.dataset.name = v.name.toLowerCase();
            li.innerHTML =
                '<img src="' + v.img + '" alt="' + v.name + ' luxury car" width="170" height="200" class="gallery-item">' +
                '<h3>' + v.name + '</h3>' +
                '<p>' + v.spec + '</p>';

            list.appendChild(li);
        });
    }

    // Build all three categories
    renderVehicles(document.querySelector('#supercars ul'), 'supercars');
    renderVehicles(document.querySelector('#luxury-suvs ul'), 'luxury-suvs');
    renderVehicles(document.querySelector('#executive-cars ul'), 'executive-cars');

    // Re-attach lightbox to new images
    document.querySelectorAll('.gallery-item').forEach(function (g) {
        g.addEventListener('click', function () {
            var lb = document.querySelector('.lightbox');
            var lbImg = document.getElementById('lightbox-img');
            if (lb) {
                lb.style.display = 'block';
                lbImg.src = this.src;
                lbImg.alt = this.alt;
            }
        });
    });
});

// Search filter
document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('searchInput');
    if (input) {
        input.addEventListener('keyup', function () {
            var val = this.value.toLowerCase();
            document.querySelectorAll('.vehicle-card').forEach(function (card) {
                var name = card.dataset.name || '';
                card.style.display = name.includes(val) ? '' : 'none';
            });
        });
    }
});

// Enquiry form (validation + AJAX)
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('enquiryForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var name = document.getElementById('full-name').value.trim();
            var email = document.getElementById('email').value.trim();
            var phone = document.getElementById('phone').value.trim();
            var vehicle = document.getElementById('vehicle').value;
            var budget = document.getElementById('budget').value;
            var branch = document.querySelector('input[name="branch"]:checked');

            clearErrors();
            var ok = true;

            if (name.length < 2) { showError('full-name', 'Enter your full name'); ok = false; }

            var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailCheck.test(email)) { showError('email', 'Enter a valid email'); ok = false; }

            var phoneCheck = /^(\+27|0)[0-9]{9}$/;
            if (!phoneCheck.test(phone.replace(/\s/g, ''))) { showError('phone', 'Enter a valid SA phone number'); ok = false; }

            if (vehicle === '') { showError('vehicle', 'Select a vehicle'); ok = false; }
            if (budget === '' || budget <= 0) { showError('budget', 'Enter a valid budget'); ok = false; }
            if (!branch) { showError('branch', 'Select a branch'); ok = false; }

            if (!ok) return;

            // AJAX submit
            var formData = new FormData(form);
            var btn = form.querySelector('input[type="submit"]');
            btn.value = 'Sending...';
            btn.disabled = true;

            fetch('https://httpbin.org/post', {
                method: 'POST',
                body: formData
            })
            .then(function (res) { return res.json(); })
            .then(function () {

                var names = {
                    'ferrari-296': 'Ferrari 296 GTB',
                    'lamborghini-huracan': 'Lamborghini Huracán EVO',
                    'mercedes-g63': 'Mercedes Benz G63 AMG',
                    'range-rover': 'Range Rover Sport',
                    'bmw-m5': 'BMW M5 Competition',
                    'audi-rs7': 'Audi RS7',
                    'other': 'your selected vehicle'
                };
                var car = names[vehicle] || vehicle;

                var msg = '✅ <strong>Enquiry Submitted</strong><br><br>' +
                    'Thank you, ' + name + '!<br><br>' +
                    'We have received your enquiry about the <strong>' + car + '</strong>.<br><br>' +
                    '<strong>Availability:</strong> This vehicle is in stock at our ' + branch.value + ' showroom.<br><br>' +
                    '<strong>Estimated Price:</strong> From R' + Number(budget).toLocaleString() + '.<br><br>' +
                    'We will contact you within 24 hours at ' + email + ' or ' + phone + '.';

                var res = document.getElementById('enquiryResponse');
                res.innerHTML = msg;
                res.style.display = 'block';
                form.style.display = 'none';
                res.scrollIntoView({ behavior: 'smooth' });
            })
            .catch(function () {
                var res = document.getElementById('enquiryResponse');
                res.innerHTML = '✅ Your enquiry has been received. We will contact you at ' + email + ' within 24 hours.';
                res.style.display = 'block';
                form.style.display = 'none';
            });
        });
    }

    function showError(id, msg) {
        var el = document.getElementById(id);
        if (el) {
            var err = document.createElement('span');
            err.className = 'error-message';
            err.textContent = msg;
            el.parentNode.insertBefore(err, el.nextSibling);
            el.style.borderColor = '#e74c3c';
        }
    }

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(function (e) { e.remove(); });
        document.querySelectorAll('input, select, textarea').forEach(function (i) {
            i.style.borderColor = '#cccccc';
        });
    }
});

// Contact form (validation + AJAX + email)
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var name = document.getElementById('contact-name').value.trim();
            var email = document.getElementById('contact-email').value.trim();
            var phone = document.getElementById('contact-phone').value.trim();
            var type = document.getElementById('message-type').value;
            var message = document.getElementById('message').value.trim();

            clearErrors();
            var ok = true;

            if (name.length < 2) { showError('contact-name', 'Enter your full name'); ok = false; }

            var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailCheck.test(email)) { showError('contact-email', 'Enter a valid email'); ok = false; }

            var phoneCheck = /^(\+27|0)[0-9]{9}$/;
            if (!phoneCheck.test(phone.replace(/\s/g, ''))) { showError('contact-phone', 'Enter a valid SA phone number'); ok = false; }

            if (type === '') { showError('message-type', 'Select a message type'); ok = false; }
            if (message.length < 10) { showError('message', 'Enter a message (at least 10 characters)'); ok = false; }

            if (!ok) return;

            var types = {
                'general': 'General Inquiry',
                'sales': 'Sales Inquiry',
                'service': 'Service Request',
                'test-drive': 'Test Drive Request',
                'feedback': 'Feedback'
            };
            var t = types[type] || type;

            // AJAX submit
            var formData = new FormData(form);
            var btn = form.querySelector('input[type="submit"]');
            btn.value = 'Sending...';
            btn.disabled = true;

            fetch('https://httpbin.org/post', {
                method: 'POST',
                body: formData
            })
            .then(function (res) { return res.json(); })
            .then(function () {

                var subject = 'Apex Exotic Motors - ' + t + ' from ' + name;
                var body = 'Name: ' + name + '%0D%0A' +
                    'Email: ' + email + '%0D%0A' +
                    'Phone: ' + phone + '%0D%0A' +
                    'Type: ' + t + '%0D%0A%0D%0A' +
                    'Message:%0D%0A' + message;

                var res = document.getElementById('contactResponse');
                res.innerHTML = '✅ <strong>Message Compiled</strong><br><br>' +
                    'Thank you, ' + name + '!<br><br>' +
                    'Click below to send your message:<br><br>' +
                    '<a href="mailto:info@apexexoticmotors.co.za?subject=' + encodeURIComponent(subject) + '&body=' + body + '" class="email-button">Send Email</a><br><br>' +
                    '<small>Or email us directly: info@apexexoticmotors.co.za</small>';
                res.style.display = 'block';
                form.style.display = 'none';
                res.scrollIntoView({ behavior: 'smooth' });
            })
            .catch(function () {
                var res = document.getElementById('contactResponse');
                res.innerHTML = '✅ Your message has been received. We will reply to ' + email + ' soon.';
                res.style.display = 'block';
                form.style.display = 'none';
            });
        });
    }

    function showError(id, msg) {
        var el = document.getElementById(id);
        if (el) {
            var err = document.createElement('span');
            err.className = 'error-message';
            err.textContent = msg;
            el.parentNode.insertBefore(err, el.nextSibling);
            el.style.borderColor = '#e74c3c';
        }
    }

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(function (e) { e.remove(); });
        document.querySelectorAll('input, select, textarea').forEach(function (i) {
            i.style.borderColor = '#cccccc';
        });
    }
});

// Leaflet map
document.addEventListener('DOMContentLoaded', function () {
    var mapEl = document.getElementById('map');
    if (mapEl && typeof L !== 'undefined') {
        var map = L.map('map').setView([-25.7479, 28.2293], 6);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(map);

        L.marker([-26.1076, 28.0567]).addTo(map)
            .bindPopup('<strong>Apex Exotic Motors - Johannesburg</strong><br>Sandton<br>+27 11 123 4567<br>jhb@apexexoticmotors.co.za');

        L.marker([-23.9045, 29.4689]).addTo(map)
            .bindPopup('<strong>Apex Exotic Motors - Polokwane</strong><br>CBD<br>+27 15 123 4567<br>polokwane@apexexoticmotors.co.za');

        L.control.scale().addTo(map);
    }
});