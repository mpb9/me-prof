from data.my_info import my_info
from data.themes import themes, themes_df
from controller.format_response import res_build_dict, response_builder

def get_my_info() -> str:
    return res_build_dict(data=my_info)

def get_themes() -> str:
    return response_builder(themes_df)

# my_info = {
#     "name": "Michael Beebe",
#     "age": 24,
#     "phone": "847-274-3448",
#     "email": "michaelbeebe1031@gmail.com",
#     "location": "Atlanta, GA",
#     "urls": {
#         "linkedin": "https://www.linkedin.com/in/michaelbeebe9",
#         "github": "https://github.com/mpb9",
#     }
# }
