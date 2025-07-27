;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '85%' } );
	};



	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor:	"#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	var skillsWayPoint = function() {
		if ($('#fh5co-skills').length > 0 ) {
			$('#fh5co-skills').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( pieChart , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}

	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	let dropdowns = document.querySelectorAll('.navbar .dropdown-toggler')
	let dropdownIsOpen = false

	if (dropdowns.length) {
		dropdowns.forEach((dropdown) => {
			dropdown.addEventListener('click', (event) => {
			let target = document.querySelector(`#${event.target.dataset.dropdown}`)

			if (target) {
				if (target.classList.contains('show')) {
				target.classList.remove('show')
				dropdownIsOpen = false
				} else {
				target.classList.add('show')
				dropdownIsOpen = true
				}
			}
			})
		})
	}

	// Handle closing dropdowns if a user clicked the body
	window.addEventListener('mouseup', (event) => {
	if (dropdownIsOpen) {
		dropdowns.forEach((dropdownButton) => {
		let dropdown = document.querySelector(`#${dropdownButton.dataset.dropdown}`)
		let targetIsDropdown = dropdown == event.target

		if (dropdownButton == event.target) {
			return
		}

		if ((!targetIsDropdown) && (!dropdown.contains(event.target))) {
			dropdown.classList.remove('show')
		}
		})
	}
	})

	// Open links in mobiles
	function handleSmallScreens() {
		document.querySelector('.navbar-toggler')
			.addEventListener('click', () => {
			let navbarMenu = document.querySelector('.navbar-menu')

			if (navbarMenu.style.display === 'flex') {
			navbarMenu.style.display = 'none'
			return
			}

			navbarMenu.style.display = 'flex'
		})
	}


	var loadBlogPosts = function() {
		// RSS feed URL
		const rssUrl = 'https://blog.nandan.dev/rss.xml';
		
		// Function to parse XML and extract blog posts
		function parseRSS(xmlText) {
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
			const items = xmlDoc.querySelectorAll('item');
			
			const posts = [];
			for (let i = 0; i < Math.min(5, items.length); i++) {
				const item = items[i];
				const title = item.querySelector('title')?.textContent || '';
				const link = item.querySelector('link')?.textContent || '';
				const description = item.querySelector('description')?.textContent || '';
				const pubDate = item.querySelector('pubDate')?.textContent || '';
				
				// Extract image from description if available
				let imageUrl = '';
				const imgMatch = description.match(/<img[^>]+src="([^"]+)"/);
				if (imgMatch) {
					imageUrl = imgMatch[1];
				} else {
					// Default image if no image found
					imageUrl = 'images/system-design.png';
				}
				
				// Format date
				let formattedDate = '';
				if (pubDate) {
					const date = new Date(pubDate);
					formattedDate = date.toLocaleDateString('en-US', { 
						year: 'numeric', 
						month: 'short', 
						day: 'numeric' 
					});
				}
				
				posts.push({
					title: title,
					link: link,
					description: description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
					date: formattedDate,
					image: imageUrl
				});
			}
			
			return posts;
		}
		
		// Function to create blog post HTML
		function createBlogPostHTML(post) {
			return `
				<div class="col-md-6">
					<div class="fh5co-blog">
						<a target="_blank" href="${post.link}" class="blog-bg" style="background-image: url(${post.image});"></a>
						<div class="blog-text">
							<span class="posted_on">${post.date}</span>
							<h3><a target="_blank" href="${post.link}">${post.title}</a></h3>
							<p>${post.description}</p>
							<ul class="stuff">
								<li><a target="_blank" href="${post.link}">Read More<i class="icon-arrow-right22"></i></a></li>
							</ul>
						</div> 
					</div>
				</div>
			`;
		}
		
		// Function to display blog posts
		function displayBlogPosts(posts) {
			const blogContainer = document.querySelector('#blog-posts-container');
			if (blogContainer && posts.length > 0) {
				// Clear existing content
				blogContainer.innerHTML = '';
				
				// Add new blog posts
				posts.forEach(post => {
					blogContainer.innerHTML += createBlogPostHTML(post);
				});
			}
		}
		
		// Function to show error message
		function showError() {
			const blogContainer = document.querySelector('#blog-posts-container');
			if (blogContainer) {
				blogContainer.innerHTML = `
					<div class="col-md-12 text-center">
						<p>Unable to load blog posts. Please visit <a href="https://blog.nandan.dev" target="_blank">my blog</a> to see the latest posts.</p>
					</div>
				`;
			}
		}
		
		// Static fallback data in case RSS fails
		const fallbackPosts = [
			{
				title: "How I \"Hacked\" an Airline Website to get back my luggage",
				link: "https://blog.nandan.dev/how-i-hacked-an-airline-website-to-get-back-my-luggage-a-first-person-insight-to-the-story",
				description: "Around 3 months back, I tweeted a thread to a famous airline in India, pointing out some flaws in their data security...",
				date: "Aug. 23rd 2022",
				image: "images/how-I-hacked.png"
			},
			{
				title: "System Design Series",
				link: "https://blog.nandan.dev/series/system-design",
				description: "Hey There, I have started learning system design and In this series, I will share my learning about system design with you. One topic at a time. Stay Tuned & Keep Learning..!! OSI,TCP/IP,Load balancers etc.",
				date: "Oct. 12rd 2022",
				image: "images/system-design.png"
			}
		];
		
		// Try multiple approaches to fetch RSS
		async function tryFetchRSS() {
			// Approach 1: Try loading from local JSON file (created by GitHub Actions)
			try {
				const response = await fetch('blog-posts.json');
				if (response.ok) {
					const posts = await response.json();
					if (posts.length > 0) {
						displayBlogPosts(posts);
						return;
					}
				}
			} catch (error) {
				console.log('Local JSON fetch failed, trying direct RSS...');
			}
			
			// Approach 2: Direct fetch (may fail due to CORS)
			try {
				const response = await fetch(rssUrl);
				if (response.ok) {
					const xmlText = await response.text();
					const posts = parseRSS(xmlText);
					if (posts.length > 0) {
						displayBlogPosts(posts);
						return;
					}
				}
			} catch (error) {
				console.log('Direct fetch failed, trying CORS proxy...');
			}
			
			// Approach 3: CORS proxy
			try {
				const corsProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;
				const response = await fetch(corsProxyUrl);
				if (response.ok) {
					const data = await response.json();
					if (data.contents) {
						const posts = parseRSS(data.contents);
						if (posts.length > 0) {
							displayBlogPosts(posts);
							return;
						}
					}
				}
			} catch (error) {
				console.log('CORS proxy failed, trying alternative proxy...');
			}
			
			// Approach 4: Alternative CORS proxy
			try {
				const altProxyUrl = `https://cors-anywhere.herokuapp.com/${rssUrl}`;
				const response = await fetch(altProxyUrl);
				if (response.ok) {
					const xmlText = await response.text();
					const posts = parseRSS(xmlText);
					if (posts.length > 0) {
						displayBlogPosts(posts);
						return;
					}
				}
			} catch (error) {
				console.log('Alternative proxy failed, using fallback...');
			}
			
			// Approach 5: Fallback to static data
			console.log('All RSS fetch attempts failed, using fallback data');
			displayBlogPosts(fallbackPosts);
		}
		
		// Start the fetch process
		tryFetchRSS();
	};

	$(function(){
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		// pieChart();
		skillsWayPoint();
		handleSmallScreens();
		loadBlogPosts(); // Load blog posts from RSS feed
	});


}());