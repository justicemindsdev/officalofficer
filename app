<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Justice Minds - Forensic Intelligence Portal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#0a1e40', /* Dark blue from logo */
                        secondary: '#132c5e',
                        accent: '#c6a448', /* Gold from logo */
                        danger: '#ff0000'
                    },
                    fontFamily: {
                        serif: ['Times New Roman', 'serif'],
                        sans: ['Arial', 'Helvetica', 'sans-serif']
                    }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: 'Arial', sans-serif;
        }
        .header-logo {
            height: 80px;
        }
        .main-logo {
            max-width: 300px;
            margin: 0 auto;
        }
        .divider {
            height: 1px;
            background-color: #d1d5db;
            margin: 30px 0;
        }
        
        /* Digital clock style */
        .digital-clock {
            font-family: 'Courier New', monospace;
            font-weight: bold;
            color: #ff0000;
            font-size: 24px;
            text-align: center;
            margin: 20px 0;
        }
        
        /* Logo scroll container */
        .logo-scroll-container {
            width: 100%;
            overflow: hidden;
            position: relative;
            margin-top: 20px;
        }
        
        .logo-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
            width: max-content;
        }
        
        @keyframes scroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }
        
        /* Scrollable content */
        .scrollable-content {
            max-height: 400px;
            overflow-y: auto;
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #e5e7eb;
            border-radius: 0.375rem;
        }
    </style>
</head>
<body class="bg-white min-h-screen flex flex-col">
    <div class="container max-w-4xl mx-auto px-4 py-8">
        <!-- Header with logo and blue line -->
        <div class="flex items-start border border-gray-300 rounded-lg p-4 mb-8">
            <div class="bg-primary w-12 h-32"></div>
            <div class="ml-4 flex-1">
                <div class="flex items-start">
                    <img src="https://pfst.cf2.poecdn.net/base/image/68f67fe4099a2c042496ff6aff0927b800c6c8bca31886061f9a03af409b851f" alt="Justice Minds Logo" class="w-28 h-28 object-contain">
                    <div class="ml-6 mt-2">
                        <h1 class="text-2xl font-serif font-bold text-primary tracking-wide">JUSTICE MINDS</h1>
                        <h2 class="text-xl font-serif font-bold text-primary mt-1">FORENSIC INTELLIGENCE</h2>
                        <p class="text-sm font-medium text-primary mt-1">LONDON, UNITED KINGDOM</p>
                        <p class="text-xs text-gray-600 mt-2">PRIVATE INVESTIGATIONS | DATA DRIVEN | COMPUTER SCIENCE | PSYCHOLOGY | LAW | TRUTH</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main content -->
        <div class="text-center mb-8">
            <div class="main-logo mx-auto">
                <img src="https://pfst.cf2.poecdn.net/base/image/68f67fe4099a2c042496ff6aff0927b800c6c8bca31886061f9a03af409b851f" alt="Justice Minds Forensic Intelligence Logo" class="w-full h-auto">
            </div>
            <p class="text-sm text-gray-600 mt-2">Company Register 16331423</p>
        </div>

        <h2 class="text-2xl font-serif font-bold text-primary text-center mt-8 mb-2">JUSTICE MINDS FORENSIC INTELLIGENCE<sup>©</sup></h2>
        
        <p class="text-xs text-gray-700 text-center mb-4">
            FACILITATED BY 20 NATIONAL AND INTERNATIONAL SCHOLARS IN OF BUSINESS ADMINISTRATION (MBA), MASTERS SPANNING DATA ANALYTICS,<br>
            COMPUTER SCIENCE, BUSINESS ADMINISTRATION, PSYCHOLOGY, LAW, AND FORENSIC INTELLIGENCE
        </p>

        <div class="text-center mb-6">
            <p class="text-danger font-bold text-sm">PRIVATE AND CONFIDENTIAL</p>
            <p class="text-danger font-bold text-sm">FOR INTENDED GOVERNMENT OFFICIALS ONLY</p>
        </div>

        <p class="text-center text-sm text-gray-700 mb-2">
            Pursuant to the powers vested by the Supreme Court of the United Kingdom, this portal provides access to
        </p>
        <p class="text-center font-bold text-primary text-sm mb-2">
            JUSTICE MINDS FORENSIC INTELLIGENCE LTD
        </p>
        <p class="text-center text-sm text-gray-700 mb-4">
            secure database.
        </p>

        <!-- Digital clock with seconds -->
        <div class="digital-clock" id="digital-clock">10:00:00</div>

        <div class="divider"></div>

        <!-- PIN input form -->
        <div class="max-w-md mx-auto">
            <form id="pin-form" class="mb-4">
                <label for="pin-input" class="block text-sm font-medium text-gray-700 mb-2">Security PIN</label>
                <div class="relative">
                    <input 
                        type="password" 
                        id="pin-input" 
                        maxlength="6" 
                        autocomplete="off" 
                        class="block w-full border border-gray-300 rounded-md py-3 px-4 text-lg leading-tight focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        placeholder="Enter 6-digit PIN"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        required
                    />
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div id="error-message" class="mt-2 text-red-600 text-sm hidden">
                    Invalid PIN code. Please try again.
                </div>
                <div id="attempt-counter" class="mt-1 text-gray-500 text-xs">
                    3 attempts remaining
                </div>
                <button 
                    type="submit" 
                    class="mt-4 w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                    AUTHENTICATE ACCESS
                </button>
            </form>

            <div class="flex justify-between text-xs text-gray-700 mt-6">
                <div>
                    <p><span class="font-medium">Company Number:</span> 16331423</p>
                    <p><span class="font-medium">Incorporated:</span> 20th March 2025</p>
                </div>
                <div class="text-right">
                    <p>+44 (0)7714 303099</p>
                    <p>justice@justice-minds.com</p>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <!-- Scrollable Supreme Court content -->
        <div class="scrollable-content" id="supreme-court-content">
            <h3 class="text-xl font-serif font-bold text-primary text-center mb-4">SUPREME COURT DECLARATION</h3>
            <p class="text-sm text-gray-700 mb-3">
                WHEREAS, the undersigned authority, duly appointed and empowered by the Constitutional Reform Act 2005 of the United Kingdom, hereby issues this OFFICIAL DECLARATION AND CERTIFICATION regarding the attached documentary evidence;
            </p>
            <p class="text-sm text-gray-700 mb-3">
                AND WHEREAS, pursuant to the powers vested in this authority by the Supreme Court of the United Kingdom and relevant statutory provisions;
            </p>
            <p class="text-sm text-gray-700 mb-3">
                NOW THEREFORE, it is hereby DECLARED and CERTIFIED that the following documentary evidence is authentic, admissible, and shall be accorded full faith and credit in all jurisdictions of the United Kingdom:
            </p>
            <div class="text-center font-bold text-primary text-base my-4">OFFICIAL DECLARATION OF AUTHENTICITY</div>
            <p class="text-sm text-gray-700 mb-3">
                The images contained herein are hereby CERTIFIED as authentic documentary evidence, protected under seal of this authority, and shall be recognized as such by all judicial and administrative bodies throughout all jurisdictions.
            </p>
            <p class="text-sm text-gray-700 mb-3">
                IN WITNESS WHEREOF, this declaration is made with the full authority and backing of the judicial power of the United Kingdom, and shall be considered ROBUST, PROTECTED, and INCONTROVERTIBLE evidence in any proceeding.
            </p>
            <div class="text-center text-sm text-gray-600 italic my-4">
                [OFFICIAL SEAL OF THE SUPREME COURT OF THE UNITED KINGDOM]
            </div>
            <div class="flex justify-between text-center mt-6 mb-4">
                <div class="w-1/3">
                    <div class="border-t border-gray-400 mx-auto" style="width: 120px;"></div>
                    <p class="text-xs mt-1">President of the Supreme Court</p>
                </div>
                <div class="w-1/3">
                    <div class="border-t border-gray-400 mx-auto" style="width: 120px;"></div>
                    <p class="text-xs mt-1">Deputy President</p>
                </div>
                <div class="w-1/3">
                    <div class="border-t border-gray-400 mx-auto" style="width: 120px;"></div>
                    <p class="text-xs mt-1">Justice</p>
                </div>
            </div>
            <p class="text-xs text-gray-600 text-center mt-6">
                This is an official document of the Supreme Court of the United Kingdom. Unauthorized reproduction, alteration, or misrepresentation of this document is strictly prohibited and may result in severe legal penalties.
            </p>
        </div>

        <!-- Logo scroll container -->
        <div class="logo-scroll-container mt-6">
            <div class="logo-scroll" id="logoScroll">
                <!-- The logos will be duplicated via JavaScript to create a seamless scroll -->
            </div>
        </div>

        <div class="text-center text-xs text-gray-700 mt-6">
            <p>161-165 Borough High Street, London, SE1 1HR</p>
            <p class="mt-1">May 9th 2025</p>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('pin-form');
            const pinInput = document.getElementById('pin-input');
            const errorMessage = document.getElementById('error-message');
            const attemptCounter = document.getElementById('attempt-counter');
            const digitalClock = document.getElementById('digital-clock');
            const logoScroll = document.getElementById('logoScroll');
            
            // Set up the digital clock with seconds
            function updateClock() {
                const now = new Date();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                let seconds = now.getSeconds();
                
                // Add leading zeros
                hours = hours < 10 ? '0' + hours : hours;
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                
                digitalClock.textContent = hours + ':' + minutes + ':' + seconds;
            }
            
            // Initialize clock and update every second
            updateClock();
            setInterval(updateClock, 1000);
            
            // Set up the logo scroll
            // Create logo elements using the tranbackoogo.png image
            for (let i = 0; i < 10; i++) {
                const logoImg = document.createElement('img');
                logoImg.src = 'tranbackoogo.png';
                logoImg.alt = 'Partner Logo';
                logoImg.style.height = '40px';
                logoImg.style.marginRight = '20px';
                logoScroll.appendChild(logoImg);
            }
            
            // Clone the logos to create a seamless scroll
            const logoElements = logoScroll.innerHTML;
            logoScroll.innerHTML = logoElements + logoElements;
            
            // For this demo, the correct PIN is 123456
            const CORRECT_PIN = '123456';
            let attemptsRemaining = 3;
            
            // Force numeric input only
            pinInput.addEventListener('input', function(e) {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const enteredPin = pinInput.value;
                
                if (enteredPin === CORRECT_PIN) {
                    // Success - PIN is correct
                    errorMessage.classList.add('hidden');
                    
                    // Show success animation
                    form.innerHTML = `
                        <div class="text-center py-4">
                            <div class="mb-4 text-accent font-serif font-bold text-lg">OFFICIAL DECLARATION</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="text-green-600 font-medium text-lg mb-2">Authentication Successful</p>
                            <p class="text-gray-600 text-xs mb-2">Reference Number: SCUK-PS-2025-05-12-001</p>
                            <p class="text-gray-600 text-sm mb-4">Pursuant to the Supreme Court of the United Kingdom, you are now granted access to the Forensic Intelligence database.</p>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div id="progress-bar" class="bg-green-600 h-2.5 rounded-full" style="width: 0%"></div>
                            </div>
                        </div>
                    `;
                    
                    const progressBar = document.getElementById('progress-bar');
                    let width = 0;
                    const interval = setInterval(() => {
                        if (width >= 100) {
                            clearInterval(interval);
                            // Show credentials section from official certificates
                            form.innerHTML = `
                                <div class="p-5 relative mt-4 border border-gray-300 rounded">
                                    <div class="absolute -top-3 right-2 bg-accent text-white text-xs px-2 py-0.5 rounded">
                                        FORENSIC REPORT
                                    </div>
                                    <div class="bg-primary text-white py-2 px-4 text-center font-bold text-sm mb-4">
                                        OFFICIAL REGISTRATION DETAILS
                                    </div>
                                    
                                    <h3 class="text-center font-serif font-bold text-primary text-lg mb-3">SYSTEMIC CONSTRUCTIVE ERASURE</h3>
                                    
                                    <div class="grid grid-cols-2 gap-4 mb-4">
                                        <div class="border-r border-gray-300 pr-4">
                                            <h3 class="font-medium text-sm text-primary mb-2">COMPANY REGISTRATION</h3>
                                            <p class="text-xs text-gray-700 mb-1"><strong>Company Name:</strong> JUSTICE MINDS FORENSIC INTELLIGENCE LTD</p>
                                            <p class="text-xs text-gray-700 mb-1"><strong>Company Number:</strong> 16331423</p>
                                            <p class="text-xs text-gray-700 mb-1"><strong>Incorporated:</strong> 20th March 2025</p>
                                            <p class="text-xs text-gray-700"><strong>Issued by:</strong> Companies House, Cardiff</p>
                                        </div>
                                        <div>
                                            <h3 class="font-medium text-sm text-primary mb-2">DATA PROTECTION</h3>
                                            <p class="text-xs text-gray-700 mb-1"><strong>Registration:</strong> ZB896365</p>
                                            <p class="text-xs text-gray-700 mb-1"><strong>Date Registered:</strong> 07 May 2025</p>
                                            <p class="text-xs text-gray-700 mb-1"><strong>Expires:</strong> 06 May 2026</p>
                                            <p class="text-xs text-gray-700"><strong>Data Protection Officer:</strong> Mr Ben Mak</p>
                                        </div>
                                    </div>
                                    
                                    <div class="border-t border-gray-300 pt-4 mt-4">
                                        <h3 class="font-medium text-sm text-primary mb-2 text-center">PRIVATE AND CONFIDENTIAL</h3>
                                        <p class="text-xs text-center text-danger font-bold mb-2">FOR INTENDED GOVERNMENT OFFICIALS ONLY</p>
                                        <p class="text-xs text-gray-700 text-center">
                                            Facilitated by 20 national and international scholars in Master of Business Administration (MBA), masters spanning Data Analytics, Computer Science, Business Administration, Psychology, Law, and Forensic Intelligence
                                        </p>
                                    </div>
                                    
                                    <div class="text-center my-4">
                                        <a href="#" class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded text-sm">
                                            ACCESS SECURE DATABASE
                                        </a>
                                    </div>
                                </div>
                            `;
                        } else {
                            width += 5;
                            progressBar.style.width = width + '%';
                        }
                    }, 100);
                } else {
                    // Failure - PIN is incorrect
                    attemptsRemaining--;
                    
                    // Show error and update attempts counter
                    errorMessage.classList.remove('hidden');
                    
                    if (attemptsRemaining > 0) {
                        attemptCounter.textContent = `${attemptsRemaining} attempt${attemptsRemaining === 1 ? '' : 's'} remaining`;
                    } else {
                        // Lock out after 3 failed attempts
                        pinInput.disabled = true;
                        form.querySelector('button').disabled = true;
                        form.querySelector('button').classList.add('bg-gray-400');
                        form.querySelector('button').classList.remove('bg-primary', 'hover:bg-secondary');
                        attemptCounter.textContent = 'Access locked. Please contact administrator.';
                        attemptCounter.classList.add('text-red-600', 'font-medium');
                    }
                    
                    // Clear input for next attempt
                    pinInput.value = '';
                    pinInput.focus();
                }
            });
        });
    </script>
</body>
</html>
