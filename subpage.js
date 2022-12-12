var client = contentful.createClient({
    space: 'njph9pcumzf4',
    accessToken: 'Veri-a7ozHPtbatrXhrd9fC7KGefYv2sTzySyVkVoCw',
  });


client.getEntries({
    content_type: 'subpage',
  }).then(entries => {
  // log the title for all the entries that have it
    let projectItem = document.getElementById('subpage');
    

console.log(entries);
// THis is going to be the csm items for just Design Projects
  entries.items.forEach(entry => {
    console.log(entry);
    

    let pageTitle = document.createElement('h1');
    pageTitle.textContent = entry.fields.pageTitle;
    pageTitle.classList.add('page-title');
    projectItem.append(pageTitle);

    let subtext = document.createElement('p');
    subtext.textContent = entry.fields.subtext;
    subtext.classList.add('project-subtext');
    projectItem.append(subtext);

    
    let img = document.createElement('img');
    img.src = createElement = entry.fields.img.fields.file.url;
    img.classList.add('picture');
    projectItem.append(img);


      // render the body text
    let bodyText = document.createElement('p');
    bodyText.textContent = entry.fields.bodyText;
    bodyText.classList.add('body-text');
    projectItem.append(bodyText);

    
  });
});
