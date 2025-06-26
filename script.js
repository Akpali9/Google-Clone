 document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const searchInput = document.getElementById('searchInput');
            const searchBox = document.getElementById('searchBox');
            const googleSearchBtn = document.getElementById('googleSearchBtn');
            const feelingLuckyBtn = document.getElementById('feelingLuckyBtn');
            const micIcon = document.getElementById('micIcon');
            const cameraIcon = document.getElementById('cameraIcon');
            const appsIcon = document.getElementById('appsIcon');
            const appsDropdown = document.getElementById('appsDropdown');
            const imageSearchOverlay = document.getElementById('imageSearchOverlay');
            const closeImageSearch = document.getElementById('closeImageSearch');
            const voiceFeedback = document.getElementById('voiceFeedback');
            const voiceText = document.getElementById('voiceText');
            const cancelVoiceBtn = document.getElementById('cancelVoiceBtn');
            
            // Focus search box on page load
            searchInput.focus();
            
            // Apps dropdown functionality
            appsIcon.addEventListener('click', function(e) {
                appsDropdown.style.display = appsDropdown.style.display === 'grid' ? 'none' : 'grid';
                e.stopPropagation();
            });
            
            // Close apps dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!appsDropdown.contains(e.target) && !appsIcon.contains(e.target)) {
                    appsDropdown.style.display = 'none';
                }
            });
            
            // "I'm Feeling Lucky" functionality
            feelingLuckyBtn.addEventListener('click', function() {
                const query = searchInput.value.trim();
                if (query) {
                    // Redirect to Google's "I'm Feeling Lucky" feature
                    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`, '_blank');
                }
            });
            
            // Image search functionality
            cameraIcon.addEventListener('click', function() {
                imageSearchOverlay.style.display = 'flex';
            });
            
            closeImageSearch.addEventListener('click', function() {
                imageSearchOverlay.style.display = 'none';
            });
            
            // Voice search functionality
            micIcon.addEventListener('click', function() {
                // Check if browser supports speech recognition
                if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
                    startVoiceRecognition();
                } else {
                    alert("Your browser doesn't support speech recognition. Try Chrome or Edge.");
                }
            });
            
            // Voice recognition function
            function startVoiceRecognition() {
                voiceFeedback.style.display = 'block';
                micIcon.classList.add('listening');
                
                // Simulate voice recognition
                setTimeout(() => {
                    voiceText.textContent = "Processing...";
                    
                    setTimeout(() => {
                        // Set a sample recognized text
                        searchInput.value = "weather in New York";
                        voiceFeedback.style.display = 'none';
                        micIcon.classList.remove('listening');
                        
                        // Automatically submit the search
                        document.querySelector('form').submit();
                    }, 1500);
                }, 2000);
            }
            
            // Cancel voice recognition
            cancelVoiceBtn.addEventListener('click', function() {
                voiceFeedback.style.display = 'none';
                micIcon.classList.remove('listening');
            });
            
            // Prevent closing image search when clicking inside
            imageSearchOverlay.addEventListener('click', function(e) {
                if (e.target === imageSearchOverlay) {
                    imageSearchOverlay.style.display = 'none';
                }
            });
            
            // Add subtle animation to search box on load
            setTimeout(() => {
                searchBox.style.transform = "scale(1.02)";
                searchBox.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
                
                setTimeout(() => {
                    searchBox.style.transform = "scale(1)";
                    searchBox.style.boxShadow = "";
                }, 300);
            }, 500);
        });
