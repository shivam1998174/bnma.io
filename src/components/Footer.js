import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-gray-800 text-white py-8 mt-12">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Call to Action & Membership Form */}
                <div>
                    <h4 class="text-lg font-bold mb-4">Join Us</h4>
                    <p>Become a part of the Bihar Nurserymen Association to promote greenery and sustainable growth.</p>
                    <form action="/membership" method="POST" class="mt-4">
                        <input type="text" name="name" placeholder="Your Name" class="w-full mb-2 p-2 rounded" required />
                        <input type="email" name="email" placeholder="Your Email" class="w-full mb-2 p-2 rounded" required />
                        <button type="submit" class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Join Now</button>
                    </form>
                </div>

                {/*  Donation Links */}
                <div>
                    <h4 class="text-lg font-bold mb-4">Support Us</h4>
                    <p>Your donations help us plant more trees and make Bihar greener.</p>
                    <div class="mt-4">
                        <a href="/donate" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded inline-block">Donate Now</a>
                    </div>
                </div>

                {/* Social Media Links */}
                <div>
                    <h4 class="text-lg font-bold mb-4">Follow Us</h4>
                    <ul class="space-y-2">
                        <li><a href="#" target="_blank" class="hover:text-blue-400">Facebook</a></li>
                        <li><a href="#" target="_blank" class="hover:text-blue-400">Twitter</a></li>
                        <li><a href="#" target="_blank" class="hover:text-blue-400">Instagram</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h4 class="text-lg font-bold mb-4">Contact Us</h4>
                    <p>Bihar Nurserymen Association</p>
                    <p>Office Address: Patna, Bihar, India</p>
                    <p>Email: <a href="mailto:info@bnassociation.com" class="hover:text-blue-400">info@bnassociation.com</a></p>
                    <p>Phone: <a href="tel:+919876543210" class="hover:text-blue-400">+91 98765 43210</a></p>
                </div>
            </div>

            <div class="text-center border-t border-gray-700 mt-8 pt-4">
                <p>&copy; 2025 Bihar Nurserymen Association. All rights reserved.</p>
            </div>
        </footer>

    )
}

export default Footer;