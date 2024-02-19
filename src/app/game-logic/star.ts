export class Star {
    x: number;
    y: number;
    velocity: number;
    time: number; // Add a time property to track the progression over time
    trail: { x: number, y: number }[]; // Store the trail positions
    maxTrailLength: number; // Limit the trail length

    constructor(x: number, y: number, velocity: number, maxTrailLength: number = 100) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.time = 0; // Initialize time to 0
        this.trail = [];
        this.maxTrailLength = maxTrailLength;
    }

    draw(context: CanvasRenderingContext2D): void {

        this.trail.forEach((pos, index) => {
            const opacity = 1 - index / this.trail.length; // Decrease opacity for older positions
            context.fillStyle = `rgba(255,255, 0, ${opacity})`; // Yellow with variable opacity
            context.beginPath();
            // Draw the trail
            // add ripple
            context.arc(pos.x, pos.y, 1 + (this.trail.length - index) / 5, 30, Math.PI * 2, true);
            context.fill();
        });

        context.fillStyle = "#ffc107";
        context.beginPath();
        // Draw the star
        context.arc(this.x, this.y, 3, 0, Math.PI * 2, true);
        context.fill();
    }

    update(canvasWidth: number, canvasHeight: number): void {
        // Update the position based on an exponential trajectory
        this.time += 0.01;
        this.y = canvasHeight - (canvasHeight * (1 - Math.exp(-this.velocity * this.time)));
        // Rising moving star fro left to right
        this.x = (canvasWidth * (1 - Math.exp(-this.velocity * this.time)));


        // Add current position to the trail
        this.trail.unshift({ x: this.x, y: this.y });

        // Keep the trail at the maximum length
        if (this.trail.length > this.maxTrailLength) {
            this.trail.pop(); // Remove the oldest position
        }


        // Reset if the star "crashes" or reaches a very high point
        if (this.y < 0 || this.time > 5) {
            // Adjust the '5' to control the "crash" time
            this.y = canvasHeight;
            // Reset time to 0
            this.time = 0;
        }
        if (this.x < 0) {
            this.x = canvasWidth;
        }
    }
}