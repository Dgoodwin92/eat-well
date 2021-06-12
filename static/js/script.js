$(document).ready(function () {
  $('.sidenav').sidenav({ edge: "right" });
  $('.materialboxed').materialbox();
  $('select').formSelect();
  $('.tooltipped').tooltip();
  $('.tabs').tabs({
    swipeable: true,
    duration: 300,
    onShow: resizeTab
});
});
  validateMaterializeSelect();
  function validateMaterializeSelect() {
      let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
      let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
      if ($("select.validate").prop("required")) {
          $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
      }
      $(".select-wrapper input.select-dropdown").on("focusin", function () {
          $(this).parent(".select-wrapper").on("change", function () {
              if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                  $(this).children("input").css(classValid);
              }
          });
      }).on("click", function () {
          if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
              $(this).parent(".select-wrapper").children("input").css(classValid);
          } else {
              $(".select-wrapper input.select-dropdown").on("focusout", function () {
                  if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                      if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                          $(this).parent(".select-wrapper").children("input").css(classInvalid);
                      }
                  }
              });
          }
      });
  }



$('#ingredient_list .add-ingredient-list-item').click(function (event) {
  let IngredientItem = `<li class="collection-item">
                          <div class="input-field">
                            <input name="ingredient_list" type="text" maxlength="100" pattern="^[A-Za-z0-9 ]*[A-Za-z0-9][A-Za-z0-9 ]*$" required>
                            <label for="ingredient_list">Ingredient</label>
                          </div>
                          <a class="remove-list-item">
                            <i class="fas fa-times"></i>
                            <span class="sr-only">Remove Ingredient</span>
                          </a>
                        </li>`;
  $(this).parent().before(IngredientItem);
});

$('#ingredient_list').on("click", ".remove-list-item", function (event) {
  $(this).parent().remove();
});

$('#recipe_method .add-method-step-item').click(function (event) {
  let methodRecipe = `<li class="collection-item">
                          <a class="remove-list-item">
                              <i class="fas fa-times"></i>
                              <span class="sr-only">Remove Method Step</span>
                          </a>
                          <div class="input-field">
                          <textarea name="recipe_method" class="materialize-textarea" required></textarea>
                          <label for="recipe_method">Step Description</label>
                          </div>
                      </li>`;
  $(this).parent().before(methodRecipe);
});

// Remove Method step item on click
$('#recipe_method').on("click", ".remove-list-item", function (event) {
  $(this).parent().remove();
});
