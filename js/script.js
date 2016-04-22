var comments = new Array();

function addComment()
{
	comments.push({ text:document.getElementById("currentComment").value, rating:0 });
	displayComments();
}

function deleteComment(id)
{
	if(comments && comments.length != 0)
	{
		var index = id.split('_')[1];
		comments.splice(index, 1);
		displayComments();
	}
}

function addRating(id)
{
	var rating = id.split('_')[1];
	var index = id.split('_')[2];
	comments[index].rating = rating;
	displayComments();
}

function displayComments()
{
	var tableComments = "<table class='table table-striped'>";
		tableComments += "<thead><tr> <th>#</th><th>Дата/время</th><th>Комментарий</th><th>Действия</th></tr></thead>";
		tableComments += "<tbody>";
			
	for(i = comments.length - 1; i >= 0; i--)
	{
		tableComments += "<tr>";
			tableComments += "<td>";
				tableComments += (i + 1);
			tableComments += "</td>";
			tableComments += "<td>";
				tableComments += (new Date()).toLocaleString();
			tableComments += "</td>";
			tableComments += "<td>";
				tableComments += comments[i].text;
			tableComments += "</td>";
			tableComments += "<td>";
				tableComments += "<img id='commentId_" + i + "' class='btnHover' src='img/delete.png' title='удалить' onclick='deleteComment(this.id);'> &nbsp ";
				tableComments += "<div class='btn-group dropup'>";
					tableComments += "<button type='button' class='btn btn-info btn-xs'>" + (comments[i].rating == 0 ? 'нет оценки' : comments[i].rating + "<img src='img/current_rating.png' >") + "</button>";
					tableComments += "<button type='button' class='btn btn-info btn-xs dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><span class='caret'></span><span class='sr-only'></span></button>";
					tableComments += "<ul class='dropdown-menu'>";
						tableComments += "<li>";
							tableComments += "<img id='rating_1_" + i + "' class='btnHover' src='img/rating.png' onclick='addRating(this.id);' >";
							tableComments += "<img id='rating_2_" + i + "' class='btnHover' src='img/rating.png' onclick='addRating(this.id);' >";
							tableComments += "<img id='rating_3_" + i + "' class='btnHover' src='img/rating.png' onclick='addRating(this.id);' >";
						tableComments += "</li>";
					tableComments += "</ul>";
				tableComments += "</div>";
			tableComments += "</td>";
		tableComments += "</tr>";
	}
	tableComments += "</tbody></table>";
	document.getElementById("allComments").innerHTML = tableComments;
}