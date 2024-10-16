

# iZAM Responsive Web Page

## Project Overview

This project is a responsive web page built from a provided UI design, developed using **HTML**, **CSS**, and **JavaScript/jQuery**. The webpage is fully responsive, adapting to different screen sizes and offering an interactive navigation menu. The page is optimized for performance and designed with modern web development techniques, including smooth transitions and media queries for a mobile-first approach.

### [Live Demo](https://aahmed-black-wolf.github.io/izam)

## Features

### 1. **Desktop Version**

- The provided UI design was converted into a desktop version using **HTML** and **CSS**.
- A flexible layout was achieved using **CSS Flexbox**, which allows for dynamic resizing based on the screen width.

### 2. **Mobile Version**

- The webpage adjusts seamlessly to mobile screens using **media queries** and a **mobile-first design** approach.
- When the viewport is resized to mobile dimensions, the navigation menu becomes a sliding panel.
- The navigation menu is triggered by clicking the "menu bars" icon, which initiates a smooth sliding transition from the right, built using **jQuery**.

### 3. **Responsiveness**

- The website is fully responsive, scaling properly on different devices, from desktop to mobile.
- Layout adjustments were handled using **CSS media queries** and flexible layout techniques.

### 4. **Performance Optimization**

- **CSS** files were minified and redundant code was reduced to optimize performance.
- Efficient use of **JavaScript** ensures fast loading times and smooth interaction.

### 5. **Browser Compatibility**

- The webpage was tested and is fully compatible with all modern browsers, including **Chrome**, **Firefox**, **Safari**, and **Edge**.

### 6. **Pixel Perfect Design**

- Extra care was taken to ensure the implementation closely follows the provided design, with accurate spacing, margins, and alignment as per the Figma design plans.

### 7. **Bonus Points**

- Advanced **CSS animations** were added to enhance user experience, particularly for the sliding navigation menu.
- The sliding navigation menu is implemented using **pure JavaScript/jQuery**, ensuring smooth interaction without relying on external libraries.

## File Structure

- **index.html**: The main HTML file containing the structure of the webpage.
- **index.scss**: The main stylesheet file, written in SCSS and compiled to CSS, which contains styles for the layout, animations, and responsiveness.
- **index.ts**: TypeScript file for handling the dynamic aspects of the webpage, including the sliding navigation menu.
- **app.ts**: Additional TypeScript file for initializing and configuring components related to user interactions.
- **job-list.d.ts**: TypeScript definition file related to job listings, ensuring type safety.

## Challenges & Decisions

- **CSS Layouts**: Flexbox was chosen for layout due to its flexibility and ease of handling responsive designs. This ensured the layout remained consistent across various screen sizes.
- **Sliding Navigation**: Implementing a smooth sliding navigation menu was challenging but was achieved using jQuery for better browser compatibility and ease of animation handling.
- **Mobile-first Approach**: Ensuring that the mobile version maintains functionality and style parity with the desktop version required careful planning of media queries and component restructuring.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/aahmed-black-wolf/izam.git
   ```
2. Navigate to the project directory and open `index.html` in a web browser to view the webpage.

## Acknowledgments

This project was developed as a part of a task to convert a Figma design into a fully responsive webpage, showcasing skills in **HTML**, **CSS/SCSS**, **JavaScript/Typescript**, and performance optimization.

---
