import $ from "jquery"

export const SearchField = (value, search) => {
    // var value = $(this).val().toLowerCase();
    $(search).filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
}