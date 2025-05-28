from flask import Blueprint, jsonify, request
from flask_cors import CORS
import pandas as pd
from pandasql import sqldf


views = Blueprint('views', __name__)
CORS(views, origins=["http://localhost:5173"])

# rename to specify which chart it will go with
@views.route('/api/data', methods=['GET'])
def get_csv_data():
    chart_type = request.args.get('chart_type', 'pm_vs_category')
    data = pd.read_csv('server/data/hirc_pm_report_cleaned.csv')
    if len(data) == 0:
        return jsonify([])
    data = data.where(pd.notnull(data), None)
    print(data)
    if chart_type == 'pm_vs_category':
    # bar chart for project managers and their categories
        query = """
        SELECT PM_NAME_1 AS project_manager, RSCH_CATG as research_category, COUNT(DISTINCT RSCH_CATG) as count
        FROM data
        WHERE PM_NAME_1 IS NOT NULL
        GROUP BY PM_NAME_1
        ;
    """
        # pie chart for all research types
    elif chart_type == 'rsch_type':
        query = """
        SELECT RSCH_TYPE AS research_type, COUNT(RSCH_TYPE) AS count
        FROM data
        WHERE RSCH_TYPE IS NOT NULL
        GROUP BY RSCH_TYPE
        ;
        """
    else:
        print('no chart specified')
        return jsonify({'error': 'Invalid chart_type specified'}), 400

    chart_data = sqldf(query, locals())
    # summary = data.describe(include='all')
    return jsonify(chart_data.to_dict(orient='records'))

    