import pandas as pd
import json
import os

themes = {
    'light':{
    'nav':{
      'fg':'bg-gray-700',
      'bg':'bg-yellow-950',
      'btn':{
        'fg':'bg-green-700',
      'bg':'bg-gray-700',
      },
    },
    'fg':'bg-green-600',
    'bg':'bg-gray-200',
  },
  'dark':{
    'nav':{
      'fg':'bg-green-600',
      'bg':'bg-stone-800',
      'btn':{
       'fg':'bg-red-100',
      'bg':'bg-stone-900',
      },
    },
    'fg':'bg-red-100',
    'bg':'bg-orange-900',
  },
}

themes_df = pd.DataFrame(themes)
