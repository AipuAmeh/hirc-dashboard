from flask import Blueprint, jsonify
import pandas as pd
from pandasql import sqldf

views = Blueprint('views', __name__)

# rename to specify which chart it will go with
@views.route('/api/data', methods=['GET', 'POST'])
def get_csv_data():
    data = pd.read_csv('server/data/hirc_pm_report_cleaned.csv')
    if len(data) == 0:
        return jsonify([])
    data = data.where(pd.notnull(data), None)
    # the query is going to be interactive
    query = """
    SELECT PM_NAME_1 AS project_manager, RSCH_CATG as research_category, COUNT(DISTINCT RSCH_CATG) as count
    FROM data
    WHERE PM_NAME_1 IS NOT NULL
    GROUP BY PM_NAME_1
    ;
    """
    chart_data = sqldf(query, locals())
    # print(chart_data)
    # summary = data.describe(include='all')
    return jsonify(chart_data.to_dict(orient='records'))

@views.route('/some-route')
def fake():
    pass

    