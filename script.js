// Get the container element
const atomContainer = document.getElementById("atom_container");

// Function to create electrons based on atomic number
function createElectrons(atomicNumber) {
  // Calculate the radius and angle for each electron
  const radius = 100;
  const angleStep = (2 * Math.PI) / atomicNumber;

  for (let i = 0; i < atomicNumber; i++) {
    // Calculate the position of the electron
    const x = radius * Math.cos(i * angleStep);
    const y = radius * Math.sin(i * angleStep);

    // Create the electron element
    const electron = document.createElement("div");
    electron.className = "electron";
    electron.style.left = `${50 + x}%`;
    electron.style.top = `${50 + y}%`;
    electron.style.animationDelay = `${i * 0.2}s`; // Add a delay to create a staggered effect

    // Add a unique spin animation for each electron
    const spinAnimationName = `electron-spin-${i}`;
    const keyframes = `@keyframes ${spinAnimationName} {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(-360deg);
      }
    }`;
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = keyframes;
    document.head.appendChild(styleSheet);

    electron.style.animation = `${spinAnimationName} 1s linear infinite`;

    // Add the electron to the container
    atomContainer.appendChild(electron);
  }
}

// Function to create the core
function createCore() {
  const core = document.createElement("div");
  core.className = "core";
  atomContainer.appendChild(core);
}

// Get the atomic number from the user
const atomicNumber = prompt("Enter the atomic number:");

// Create the core and electrons
createCore();
createElectrons(atomicNumber);
