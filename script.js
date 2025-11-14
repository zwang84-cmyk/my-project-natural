// Nature Scene Prototype - Interactive Elements

class NatureScene {
    constructor() {
        this.currentScene = 'initial';
        this.init();
    }

    init() {
        // Initial screen split sections
        const splitSections = document.querySelectorAll('.split-section');
        splitSections.forEach(section => {
            section.addEventListener('click', (e) => this.handleSceneTransition(e));
        });

        // Forest scene interactions
        const treeZone = document.querySelector('.tree-zone');
        const skyZone = document.querySelector('.sky-zone');

        if (treeZone) {
            treeZone.addEventListener('click', (e) => this.createFallingLeaves(e));
        }

        if (skyZone) {
            skyZone.addEventListener('click', (e) => this.createBirds(e));
        }

        // Meadow scene interactions
        const grassZone = document.querySelector('.grass-zone');
        const meadowSkyZone = document.querySelector('.meadow-sky-zone');

        if (grassZone) {
            grassZone.addEventListener('click', (e) => this.createFlower(e));
        }

        if (meadowSkyZone) {
            meadowSkyZone.addEventListener('click', (e) => this.createDriftingCloud(e));
        }
    }

    handleSceneTransition(event) {
        const targetScene = event.currentTarget.dataset.scene;

        const initialScreen = document.getElementById('initial-screen');
        const forestScene = document.getElementById('forest-scene');
        const meadowScene = document.getElementById('meadow-scene');

        if (targetScene === 'forest') {
            // Slide to forest
            initialScreen.classList.add('slide-left');
            initialScreen.classList.remove('active');

            setTimeout(() => {
                forestScene.classList.add('active');
                this.currentScene = 'forest';
            }, 50);

        } else if (targetScene === 'meadow') {
            // Slide to meadow
            initialScreen.classList.add('slide-left');
            initialScreen.classList.remove('active');

            setTimeout(() => {
                meadowScene.classList.add('active');
                this.currentScene = 'meadow';
            }, 50);
        }
    }

    createFallingLeaves(event) {
        const container = event.currentTarget.parentElement;
        const rect = container.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        const leafCount = Math.floor(Math.random() * 5) + 6; // 6-10 leaves

        for (let i = 0; i < leafCount; i++) {
            const leaf = document.createElement('div');
            leaf.className = 'leaf';

            // Random starting position around click
            const offsetX = (Math.random() - 0.5) * 40;
            const offsetY = (Math.random() - 0.5) * 40;

            leaf.style.left = `${clickX + offsetX}px`;
            leaf.style.top = `${clickY + offsetY}px`;

            // Random animation properties
            const fallDistance = 400 + Math.random() * 200;
            const sway = (Math.random() - 0.5) * 100;
            const rotation = Math.random() * 25 + 15; // 15-40 degrees
            const duration = 1200 + Math.random() * 400; // 1200-1600ms

            leaf.style.setProperty('--fall-distance', `${fallDistance}px`);
            leaf.style.setProperty('--fall-sway', `${sway}px`);
            leaf.style.setProperty('--fall-rotation', `${rotation}deg`);

            // Random color variation
            const colors = ['#c9d97a', '#d9c97a', '#e8b870'];
            leaf.style.background = colors[Math.floor(Math.random() * colors.length)];

            container.appendChild(leaf);

            // Start animation
            setTimeout(() => {
                leaf.style.animation = `fall ${duration}ms ease-out forwards`;
            }, 10);

            // Remove after animation
            setTimeout(() => {
                leaf.remove();
            }, duration + 100);
        }
    }

    createBirds(event) {
        const container = event.currentTarget.parentElement;
        const rect = container.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        const birdCount = Math.floor(Math.random() * 2) + 2; // 2-3 birds

        for (let i = 0; i < birdCount; i++) {
            const bird = document.createElement('div');
            bird.className = 'bird';

            // Random starting position around click
            const offsetX = (Math.random() - 0.5) * 60;
            const offsetY = (Math.random() - 0.5) * 30;

            bird.style.left = `${clickX + offsetX}px`;
            bird.style.top = `${clickY + offsetY}px`;

            // Flight path (diagonal up and right)
            const flyX = 150 + Math.random() * 100; // 150-250px right
            const flyY = -(100 + Math.random() * 50); // 100-150px up
            const duration = 1500 + Math.random() * 500; // 1500-2000ms

            bird.style.setProperty('--fly-x', `${flyX}px`);
            bird.style.setProperty('--fly-y', `${flyY}px`);

            container.appendChild(bird);

            // Start animations
            setTimeout(() => {
                bird.style.animation = `fly ${duration}ms ease-out forwards, flap 300ms ease-in-out infinite`;
            }, i * 200); // Stagger bird launches

            // Remove after animation
            setTimeout(() => {
                bird.remove();
            }, duration + (i * 200) + 100);
        }
    }

    createFlower(event) {
        const container = event.currentTarget.parentElement;
        const rect = container.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        const flower = document.createElement('div');
        flower.className = 'flower';

        // Position at exact click location
        flower.style.left = `${clickX}px`;
        flower.style.bottom = `${rect.height - clickY}px`;

        // Create stem
        const stem = document.createElement('div');
        stem.className = 'flower-stem';
        const stemHeight = 30 + Math.random() * 10; // 30-40px
        stem.style.height = `${stemHeight}px`;

        // Create flower head
        const head = document.createElement('div');
        head.className = 'flower-head';
        const headSize = 18 + Math.random() * 4; // 18-22px
        head.style.width = `${headSize}px`;
        head.style.height = `${headSize}px`;

        // Random color
        const colors = [
            'rgba(255, 182, 193, 0.9)', // soft pink
            'rgba(255, 253, 150, 0.9)', // light yellow
            'rgba(221, 160, 221, 0.9)'  // pastel purple
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        head.style.background = color;
        head.style.setProperty('--flower-color', color);

        // Also set the pseudo-elements color
        if (head.style.setProperty) {
            const style = document.createElement('style');
            const uniqueId = `flower-${Date.now()}-${Math.random()}`;
            head.setAttribute('data-flower-id', uniqueId);
            style.textContent = `
                .flower-head[data-flower-id="${uniqueId}"]::before,
                .flower-head[data-flower-id="${uniqueId}"]::after {
                    background: ${color};
                }
            `;
            document.head.appendChild(style);
        }

        flower.appendChild(stem);
        flower.appendChild(head);
        container.appendChild(flower);

        // Animate growth
        setTimeout(() => {
            stem.style.animation = 'grow-stem 600ms ease-out forwards';
            setTimeout(() => {
                head.style.animation = 'bloom 500ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
            }, 400);
        }, 10);
    }

    createDriftingCloud(event) {
        const container = event.currentTarget.parentElement;
        const rect = container.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        const cloud = document.createElement('div');
        cloud.className = 'cloud drifting-cloud';

        // Random size
        const width = 40 + Math.random() * 15; // 40-55px
        cloud.style.width = `${width}px`;
        cloud.style.height = `${width * 0.4}px`; // Maintain aspect ratio

        // Position at click
        cloud.style.left = `${clickX}px`;
        cloud.style.top = `${clickY}px`;

        // Determine drift direction based on click position
        const screenCenter = rect.width / 2;
        const driftRight = clickX < screenCenter;

        const driftDistance = driftRight ?
            (200 + Math.random() * 100) :
            -(200 + Math.random() * 100);

        const duration = 2000 + Math.random() * 1000; // 2000-3000ms

        cloud.style.setProperty('--drift-distance', `${driftDistance}px`);

        container.appendChild(cloud);

        // Start animation
        setTimeout(() => {
            cloud.style.animation = `drift ${duration}ms ease-in-out forwards`;
        }, 10);

        // Remove after animation
        setTimeout(() => {
            cloud.remove();
        }, duration + 100);
    }
}

// Initialize the scene when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NatureScene();
});
