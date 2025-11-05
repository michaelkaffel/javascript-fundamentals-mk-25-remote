 window.addEventListener('load', generateFaces);

        let numberOfFaces = 5;
        const theLeftSide = document.getElementById('leftSide');
        const theRightSide = document.getElementById('rightSide');
        let counterElement = document.getElementById('counter');
        let resetBtn = document.getElementById('resetBtn')
        resetBtn.hidden = true;
        resetBtn.addEventListener('click', restart)

        let counter = 0;

        function generateFaces() {
            for (let i = 0; i < numberOfFaces; i++) {
                let face = document.createElement('img');
                face.src = 'images/smile.png';
                const randomTop = Math.floor(Math.random() * 350) + 1;
                const randomLeft = Math.floor(Math.random() * 300) + 1;
                face.style.top = randomTop + 'px';
                face.style.left = randomLeft + 'px';
                theLeftSide.appendChild(face);
            }

            const leftSideImages = theLeftSide.cloneNode(true);
            leftSideImages.removeChild(leftSideImages.lastChild);
            theRightSide.appendChild(leftSideImages);
            counterElement.innerHTML = counter;
            counter++;


            theLeftSide.lastChild.addEventListener('click', nextLevel);
            document.body.addEventListener('click', gameOver);

        }

        function nextLevel(event) {
            event.stopPropagation();
            numberOfFaces += 5;
            resetBoard()
            generateFaces();
        }

        function gameOver() {
            alert('Game Over');
            document.body.removeEventListener('click', gameOver);
            theLeftSide.lastChild.removeEventListener('click', nextLevel);
            resetBtn.hidden = false;
        }

        function resetBoard() {
            while (theLeftSide.firstChild) {
                theLeftSide.removeChild(theLeftSide.firstChild)
            }
            while (theRightSide.firstChild) {
                theRightSide.removeChild(theRightSide.firstChild)
            }

        }

        function restart() {
            window.location.reload();
        }