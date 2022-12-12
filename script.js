var client = contentful.createClient({
    space: 'njph9pcumzf4',
    accessToken: 'Veri-a7ozHPtbatrXhrd9fC7KGefYv2sTzySyVkVoCw',
  });



client.getEntries({
    content_type: 'project',
  }).then(entries => {
  // log the title for all the entries that have it
    let project = document.getElementById('project');
    
console.log(entries);
// THis is going to be the csm items for just Design Projects
  entries.items.forEach(entry => {
    // console.log(entry);
    

    let title = document.createElement('h1');
    title.href = entry.fields.url;
    title.textContent = entry.fields.title;
    title.classList.add('project-title');
    project.append(title);


    let picture = document.createElement('img');
    picture.src = createElement = entry.fields.picture.fields.file.url;
    picture.classList.add('project-picture');
    project.append(picture);
    picture.href = entry.fields.url;
    console.log(picture);
    picture.addEventListener("click", () => {
      window.open(entry.fields.url, "_self");
    })

    
      // render the body text
    let content = document.createElement('p');
    content.textContent = entry.fields.body;
    content.classList.add('project-subtext');
    project.append(content);

  });
});

window.ityped.init(document.querySelector('.ityped'),{
  strings: ['Digital Designer','Creative Technologist','Photographer'],
  loop: true
})


