(function() {

    var data = [
        {
            name: "atom-beautify",
            description: "Atom-beautify is a package that will clean up your code and make it more readable!", 
            author: "Glavin001", 
            url: 'https://atom.io/packages/atom-beautify', 
            downloads: 4228040, 
            stars: 4541, 
            price: 6.75,
            selector: "p1",
        },
        
        {
            name: "autoclose-html-plus", 
            description: "This autoclose-html-plus package automatically closes HTML tags for you once you've typed the first tag!",
            author: "binaryfunt", 
            url: "https://atom.io/packages/autoclose-html-plus",
            downloads: 16000, 
            stars: 4, 
            price: 5.50, 
            selector: "p2", 



        }, 
        
        {
            name: "Emmet",
            description: "Helps create HTML and CSS faster with the use of snippets!", 
            author: "emmetio", 
            url: 'https://atom.io/packages/emmet', 
            downloads: 3284253, 
            stars: 2854, 
            price: 6.75,
            selector: "p3",
        },

        {
            name: "Atom-Liquid-Snippets", 
            description: "Adds support for Shopify Liquid snippets with a set of commands found in the documantation for the package!", 
            author: "rickmurt", 
            url: 'https://atom.io/packages/atom-liquid-snippets', 
            downloads: 8572, 
            stars: 7, 
            price: 8.75, 
            selector: "p4", 
        }, 

        {
            name: "git-blame", 
            description: "Allows you to toggle git-blame annotations in the gutter of the Atom Editor!", 
            author: "alexcorre", 
            url: "https://atom.io/packages/git-blame", 
            downloads: 256942, 
            stars: 445, 
            price: 8.75, 
            selector: "p5", 


        }, 

        {
            name: "git-plus", 
            description: "Provides shortcuts to commonly used git actions, without the need to witch to terminal!", 
            author: "akonwi", 
            url: "https://atom.io/packages/git-plus", 
            downloads: 2717194, 
            stars: 2628, 
            price: 5.15, 
            selector: "p6",
        }, 

        {
            name: "git-time-machine", 
            description: "Shows you a visual plot of commits in your current file over time!", 
            author: 'littlebee', 
            url: "https://atom.io/packages/git-time-machine", 
            downloads: 400270, 
            stars: 1036, 
            price: 1.15, 
            selector: "p7", 

        },

        {
            name: 'Linter', 
            description: "This is a base Linter package that relies on sub-pacages for specific langauges!", 
            author: 'steelbrain', 
            url: "https://atom.io/packages/linter",
            downloads: 7439139,  
            stars: 4635, 
            price: 8.00, 
            selector: "p8", 
        }
    ];
    function Package(data) { 
        this.name = data.name; 
        this.description = data.description; 
        this.author = data.author; 
        this.url = data.url; 
        this.downloads = data.downloads; 
        this.stars = data.stars; 
        this.selector = data.selector; 

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString(); 

        }; 

        this.getFormattedStars = function () { 
            return this.stars.toLocaleString(); 
        }; 
    }
    var getTodaysDate = function() { 
        var today = new Date(); 
        return today.toDateString(); 
    }; 

    var getEl = function (id) { 
        return document.getElementById(id); 
    } 

    var writePackageInfo = function(package) { 
        var selector = package.selector, 
            nameEl = getEl(selector + '-name'), 
            descEl = getEl(selector + '-description') 
            authEl = getEl(selector + '-author'), 
            downloadEl = getEl(selector + '-downloads'), 
            starsEl = getEl(selector + '-stars'); 

            nameEl.textContent = package.name; 
            descEl.textContent = package.description; 
            authEl.textContent = package.author; 
            downloadEl.textContent = package.getFormattedDownloads(); 
            starsEl.textContent = package.getFormattedStars(); 



    }
    dateEl = getEl('date'); 
    dateEl.textContent = getTodaysDate(); 

    var beautify = new Package(data[0]); 
    writePackageInfo(beautify);  

    var autoclose = new Package(data[1]); 
    writePackageInfo(autoclose); 

    var emmet = new Package(data[2]); 
    writePackageInfo(emmet); 

    var liquidSnippets = new Package(data[3]); 
    writePackageInfo(liquidSnippets); 

    var gitBlame = new Package(data[4]); 
    writePackageInfo(gitBlame);  

    var gitPlus = new Package(data[5]); 
    writePackageInfo(gitPlus); 

    var gitTimeMachine = new Package(data[6]); 
    writePackageInfo(gitTimeMachine); 

    var Linter = new Package(data[7]); 
    writePackageInfo(Linter); 

}()); 
